import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SolarCalculatorClient } from "./SolarCalculatorClient";

export const metadata: Metadata = {
  title: "Solar Calculator Lebanon",
  description:
    "Use the MOE VOLT Solar & Battery Sizing Calculator for Lebanon to estimate inverter size, battery quantity, battery storage, PV panel quantity, and daily solar energy needs.",
  keywords: ["Solar Calculator Lebanon", "Battery Sizing Calculator", "MOE VOLT", "solar battery calculator Lebanon", "solar panel calculator Lebanon"],
  alternates: { canonical: "/solar-calculator" }
};

export default function SolarCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="MOE VOLT calculator"
        title="Solar and battery sizing made simple."
        description="Estimate daily energy, inverter size, lithium battery quantity, and PV panel count before requesting a professional MOE VOLT quotation."
      />
      <SolarCalculatorClient />
    </>
  );
}
