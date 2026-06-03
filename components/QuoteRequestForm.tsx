"use client";

import type { ChangeEvent, DragEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { CheckCircle2, ImagePlus, Send, XCircle } from "lucide-react";
import { leadServices } from "@/lib/site";
import type { QuoteRequest } from "@/lib/adminData";

const storageKey = "moe_quote_requests";

type FormState = {
  fullName: string;
  phone: string;
  area: string;
  service: string;
  emergency: "Yes" | "No" | "";
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  area: "",
  service: "",
  emergency: "",
  message: ""
};

export function QuoteRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const canSubmit = useMemo(
    () => form.fullName.trim() && form.phone.trim() && form.area.trim() && form.service && form.emergency && form.message.trim(),
    [form]
  );

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function addPhotos(fileList: FileList | null) {
    if (!fileList) return;
    const images = Array.from(fileList).filter((file) => file.type.startsWith("image/"));
    setPhotos((current) => [...current, ...images].slice(0, 6));
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    addPhotos(event.dataTransfer.files);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    addPhotos(event.target.files);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setError("");

    if (!canSubmit) {
      setStatus("error");
      setError("Please complete all required fields before sending your request.");
      return;
    }

    const request: QuoteRequest = {
      id: `QR-${Date.now()}`,
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      area: form.area.trim(),
      service: form.service,
      emergency: form.emergency || "No",
      message: form.message.trim(),
      photos: photos.map((photo) => photo.name),
      status: "New",
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(window.localStorage.getItem(storageKey) || "[]") as QuoteRequest[];
      window.localStorage.setItem(storageKey, JSON.stringify([request, ...existing]));
      setForm(initialState);
      setPhotos([]);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("The request could not be completed. Please call or send the details on WhatsApp.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Full Name
          <input className="input-field" value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Phone Number
          <input className="input-field" type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required />
        </label>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Area/City
          <input className="input-field" value={form.area} onChange={(event) => updateField("area", event.target.value)} placeholder="Beirut, Jounieh, Baabda..." required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Service Needed
          <select className="input-field" value={form.service} onChange={(event) => updateField("service", event.target.value)} required>
            <option value="" disabled>Select a service</option>
            {leadServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-bold text-ink">Emergency?</legend>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:max-w-xs">
          {(["Yes", "No"] as const).map((value) => (
            <label key={value} className={`rounded-md border px-4 py-3 text-center text-sm font-black transition ${form.emergency === value ? "border-electric bg-electric text-ink" : "border-slate-200 bg-white text-slate-700"}`}>
              <input className="sr-only" type="radio" name="emergency" value={value} checked={form.emergency === value} onChange={() => updateField("emergency", value)} />
              {value}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
        Message
        <textarea className="input-field min-h-32 resize-y" value={form.message} onChange={(event) => updateField("message", event.target.value)} required />
      </label>

      <label
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-electric hover:bg-electric/10"
      >
        <ImagePlus className="h-9 w-9 text-steel" aria-hidden="true" />
        <span className="mt-3 font-black text-ink">Upload Photos</span>
        <span className="mt-1 text-sm text-slate-500">Drag and drop images or tap to browse. Up to 6 photos.</span>
        <input className="sr-only" type="file" accept="image/*" multiple onChange={handleFileChange} />
      </label>

      {photos.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {photos.map((photo) => (
            <span key={`${photo.name}-${photo.size}`} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
              {photo.name}
            </span>
          ))}
        </div>
      ) : null}

      {status === "success" ? (
        <div className="mt-5 flex gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          Request received. Moe can follow up with the right next step.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800">
          <XCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          {error}
        </div>
      ) : null}

      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-electric px-5 py-3 text-sm font-black text-ink shadow-glow transition hover:bg-navy hover:text-white md:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        Request Quote
      </button>
    </form>
  );
}
