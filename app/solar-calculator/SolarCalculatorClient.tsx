"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BatteryCharging, Calculator, Phone, Sun, UserRound, Zap } from "lucide-react";

type CalculatorInput = {
  customerName: string;
  phoneNumber: string;
  dayAmps: string;
  dayHours: string;
  nightAmps: string;
  nightHours: string;
  voltage: string;
  panelWattage: string;
  batteryVoltage: string;
  batteryCapacityAh: string;
  peakSunHours: string;
  safetyMargin: string;
};

const initialInput: CalculatorInput = {
  customerName: "",
  phoneNumber: "",
  dayAmps: "",
  dayHours: "",
  nightAmps: "",
  nightHours: "",
  voltage: "220",
  panelWattage: "550",
  batteryVoltage: "51.2",
  batteryCapacityAh: "100",
  peakSunHours: "5",
  safetyMargin: "20"
};

const inverterSizes = [3000, 5000, 6000, 8000, 10000, 12000, 15000];
const numericFieldLabels: Record<
  Extract<
    keyof CalculatorInput,
    | "dayAmps"
    | "dayHours"
    | "nightAmps"
    | "nightHours"
    | "voltage"
    | "panelWattage"
    | "batteryVoltage"
    | "batteryCapacityAh"
    | "peakSunHours"
    | "safetyMargin"
  >,
  string
> = {
  dayAmps: "Day load in amps",
  dayHours: "Day running hours",
  nightAmps: "Night load in amps",
  nightHours: "Night running hours",
  voltage: "Voltage",
  panelWattage: "Panel wattage",
  batteryVoltage: "Battery voltage",
  batteryCapacityAh: "Battery capacity",
  peakSunHours: "Peak sun hours",
  safetyMargin: "Safety margin"
};

function sanitizeName(value: string) {
  return value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ");
}

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function sanitizeDecimal(value: string) {
  const cleaned = value.replace(/[^\d.]/g, "");
  const [whole = "", ...decimalParts] = cleaned.split(".");
  const decimal = decimalParts.join("");

  return decimalParts.length ? `${whole}.${decimal}` : whole;
}

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function roundUpInverter(watts: number) {
  const size = inverterSizes.find((candidate) => candidate >= watts);
  return size ?? inverterSizes[inverterSizes.length - 1];
}

function formatKw(value: number) {
  return `${value.toFixed(value >= 10 ? 1 : 2)} kW`;
}

function formatKwh(value: number) {
  return `${value.toFixed(value >= 10 ? 1 : 2)} kWh`;
}

function formatWatts(value: number) {
  return `${Math.round(value).toLocaleString()} W`;
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "tel" | "number";
  inputMode?: "text" | "tel" | "numeric" | "decimal";
  suffix?: string;
  required?: boolean;
  min?: string;
  step?: string;
  icon?: typeof UserRound;
};

function Field({
  label,
  value,
  onChange,
  type = "number",
  inputMode = type === "number" ? "decimal" : undefined,
  suffix,
  required,
  min = "0.01",
  step = "any",
  icon: Icon
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      <span>{label}</span>
      <span className="flex overflow-hidden rounded-lg border border-slate-300 bg-white transition focus-within:border-electric focus-within:shadow-[0_0_0_4px_rgba(255,210,31,0.18)]">
        {Icon ? (
          <span className="flex w-11 shrink-0 items-center justify-center border-r border-slate-200 bg-slate-50 text-steel">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
        <input
          className="min-h-12 min-w-0 flex-1 border-0 bg-white px-4 py-3 text-ink outline-none"
          type={type}
          inputMode={inputMode}
          value={value}
          min={type === "number" ? min : undefined}
          step={type === "number" ? step : undefined}
          onChange={(event) => onChange(event.target.value)}
          required={required}
        />
        {suffix ? (
          <span className="flex min-w-14 shrink-0 items-center justify-center border-l border-slate-200 bg-slate-50 px-3 text-xs font-black uppercase text-slate-500">
            {suffix}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export function SolarCalculatorClient() {
  const [input, setInput] = useState<CalculatorInput>(initialInput);

  function updateField<K extends keyof CalculatorInput>(field: K, value: CalculatorInput[K]) {
    setInput((current) => ({ ...current, [field]: value }));
  }

  function updateName(value: string) {
    updateField("customerName", sanitizeName(value));
  }

  function updatePhone(value: string) {
    updateField("phoneNumber", sanitizeDigits(value));
  }

  function updateDecimalField<K extends keyof typeof numericFieldLabels>(field: K, value: string) {
    updateField(field, sanitizeDecimal(value));
  }

  const validation = useMemo(() => {
    const values = {
      dayAmps: toNumber(input.dayAmps),
      dayHours: toNumber(input.dayHours),
      nightAmps: toNumber(input.nightAmps),
      nightHours: toNumber(input.nightHours),
      voltage: toNumber(input.voltage),
      panelWattage: toNumber(input.panelWattage),
      batteryVoltage: toNumber(input.batteryVoltage),
      batteryCapacityAh: toNumber(input.batteryCapacityAh),
      peakSunHours: toNumber(input.peakSunHours),
      safetyMargin: toNumber(input.safetyMargin)
    };
    const messages = Object.entries(values).flatMap(([field, value]) => {
      const typedField = field as keyof typeof values;

      if (input[typedField].trim() === "") {
        return `${numericFieldLabels[typedField]} is required and must use numbers only.`;
      }

      if (!Number.isFinite(value) || value <= 0) {
        return `${numericFieldLabels[typedField]} must be a number greater than 0.`;
      }

      return [];
    });

    return { values, messages };
  }, [input]);

  const calculations = useMemo(() => {
    if (validation.messages.length) return null;

    const {
      dayAmps,
      dayHours,
      nightAmps,
      nightHours,
      voltage,
      panelWattage,
      batteryVoltage,
      batteryCapacityAh,
      peakSunHours,
      safetyMargin
    } = validation.values;
    const marginMultiplier = 1 + safetyMargin / 100;

    const dayWatts = dayAmps * voltage;
    const nightWatts = nightAmps * voltage;
    const dayEnergyKwh = (dayWatts * dayHours) / 1000;
    const nightEnergyKwh = (nightWatts * nightHours) / 1000;
    const totalEnergyKwh = dayEnergyKwh + nightEnergyKwh;
    const maxLoadWatts = Math.max(dayWatts, nightWatts);
    const inverterWithMargin = maxLoadWatts * marginMultiplier;
    const recommendedInverter = roundUpInverter(inverterWithMargin);
    const batteryUnitKwh = (batteryVoltage * batteryCapacityAh) / 1000;
    const requiredBatteryKwh = nightEnergyKwh * marginMultiplier;
    const batteryQuantity = batteryUnitKwh > 0 ? Math.ceil(requiredBatteryKwh / batteryUnitKwh) : 0;
    const totalBatteryStorage = batteryQuantity * batteryUnitKwh;
    const requiredPvKw = peakSunHours > 0 ? (totalEnergyKwh / peakSunHours) * marginMultiplier : 0;
    const panelQuantity = panelWattage > 0 ? Math.ceil((requiredPvKw * 1000) / panelWattage) : 0;
    const totalPvKw = (panelQuantity * panelWattage) / 1000;

    return {
      dayAmps,
      dayHours,
      nightAmps,
      nightHours,
      voltage,
      panelWattage,
      batteryVoltage,
      batteryCapacityAh,
      peakSunHours,
      safetyMargin,
      dayWatts,
      nightWatts,
      totalEnergyKwh,
      maxLoadWatts,
      inverterWithMargin,
      recommendedInverter,
      batteryUnitKwh,
      requiredBatteryKwh,
      batteryQuantity,
      totalBatteryStorage,
      requiredPvKw,
      panelQuantity,
      totalPvKw
    };
  }, [validation]);

  const hasValidInputs = calculations !== null;
  const inverterLabel =
    calculations && calculations.inverterWithMargin > inverterSizes[inverterSizes.length - 1]
      ? `${formatKw(calculations.recommendedInverter / 1000)}+`
      : calculations
        ? formatKw(calculations.recommendedInverter / 1000)
        : "--";

  const quoteSummary = calculations
    ? [
        input.customerName.trim() ? `Customer: ${input.customerName.trim()}` : null,
        input.phoneNumber.trim() ? `Phone: ${input.phoneNumber.trim()}` : null,
        "Solar calculator result:",
        `Day watts: ${formatWatts(calculations.dayWatts)}`,
        `Night watts: ${formatWatts(calculations.nightWatts)}`,
        `Total daily energy: ${formatKwh(calculations.totalEnergyKwh)}`,
        `Recommended inverter: ${inverterLabel}`,
        `Required battery: ${formatKwh(calculations.requiredBatteryKwh)}`,
        `Battery quantity: ${calculations.batteryQuantity}`,
        `Total battery storage: ${formatKwh(calculations.totalBatteryStorage)}`,
        `Required PV: ${formatKw(calculations.requiredPvKw)}`,
        `Panel quantity: ${calculations.panelQuantity}`,
        `Total PV size: ${formatKw(calculations.totalPvKw)}`
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const quoteHref = `/quote?service=${encodeURIComponent("Solar Electrical Support")}&message=${encodeURIComponent(quoteSummary)}`;

  const resultCards = [
    { label: "Day Watts", value: calculations ? formatWatts(calculations.dayWatts) : "--", icon: Zap },
    { label: "Night Watts", value: calculations ? formatWatts(calculations.nightWatts) : "--", icon: Zap },
    { label: "Total Daily Energy", value: calculations ? formatKwh(calculations.totalEnergyKwh) : "--", icon: Calculator },
    { label: "Recommended Inverter", value: inverterLabel, icon: Zap },
    { label: "Required Battery kWh", value: calculations ? formatKwh(calculations.requiredBatteryKwh) : "--", icon: BatteryCharging },
    { label: "Battery Quantity", value: calculations ? calculations.batteryQuantity.toLocaleString() : "--", icon: BatteryCharging },
    { label: "Total Battery Storage", value: calculations ? formatKwh(calculations.totalBatteryStorage) : "--", icon: BatteryCharging },
    { label: "Required PV kW", value: calculations ? formatKw(calculations.requiredPvKw) : "--", icon: Sun },
    { label: "Panel Quantity", value: calculations ? calculations.panelQuantity.toLocaleString() : "--", icon: Sun },
    { label: "Total PV Size", value: calculations ? formatKw(calculations.totalPvKw) : "--", icon: Sun }
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-premium md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-electric">
              <Calculator className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-ink">System Details</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">Enter the expected daytime and nighttime load.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Customer Name" type="text" inputMode="text" value={input.customerName} onChange={updateName} icon={UserRound} />
            <Field label="Phone Number" type="tel" inputMode="numeric" value={input.phoneNumber} onChange={updatePhone} icon={Phone} />
            <Field label="Day Load in Amps" value={input.dayAmps} onChange={(value) => updateDecimalField("dayAmps", value)} suffix="A" required min="0.01" />
            <Field label="Day Running Hours" value={input.dayHours} onChange={(value) => updateDecimalField("dayHours", value)} suffix="hrs" required min="0.01" />
            <Field label="Night Load in Amps" value={input.nightAmps} onChange={(value) => updateDecimalField("nightAmps", value)} suffix="A" required min="0.01" />
            <Field label="Night Running Hours" value={input.nightHours} onChange={(value) => updateDecimalField("nightHours", value)} suffix="hrs" required min="0.01" />
            <Field label="Voltage" value={input.voltage} onChange={(value) => updateDecimalField("voltage", value)} suffix="V" required min="0.01" />
            <Field label="Panel Wattage" value={input.panelWattage} onChange={(value) => updateDecimalField("panelWattage", value)} suffix="W" required min="0.01" />
            <Field label="Battery Voltage" value={input.batteryVoltage} onChange={(value) => updateDecimalField("batteryVoltage", value)} suffix="V" required min="0.01" />
            <Field label="Battery Capacity Ah" value={input.batteryCapacityAh} onChange={(value) => updateDecimalField("batteryCapacityAh", value)} suffix="Ah" required min="0.01" />
            <Field label="Peak Sun Hours" value={input.peakSunHours} onChange={(value) => updateDecimalField("peakSunHours", value)} suffix="hrs" required min="0.01" />
            <Field label="Safety Margin %" value={input.safetyMargin} onChange={(value) => updateDecimalField("safetyMargin", value)} suffix="%" required min="0.01" />
          </div>

        </div>

        <aside className="rounded-lg bg-ink p-5 text-white shadow-premium md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-electric">Calculated sizing</p>
              <h2 className="mt-2 text-2xl font-black">Recommended System</h2>
            </div>
            <Sun className="h-9 w-9 text-electric" aria-hidden="true" />
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {resultCards.map((result) => {
              const Icon = result.icon;
              return (
                <div key={result.label} className="rounded-md border border-white/10 bg-white/5 p-4">
                  <Icon className="h-5 w-5 text-electric" aria-hidden="true" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-white/50">{result.label}</p>
                  <p className="mt-1 text-xl font-black text-white">{result.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-md border border-electric/30 bg-electric/10 p-4">
            <p className="text-sm font-bold leading-7 text-white/80">Send this result to MOE VOLT for a professional quotation.</p>
            <Link
              href={quoteHref}
              aria-disabled={!hasValidInputs}
              className={`mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black transition md:w-auto ${
                hasValidInputs ? "bg-electric text-ink hover:bg-white" : "pointer-events-none bg-white/10 text-white/40"
              }`}
            >
              Request Quotation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
