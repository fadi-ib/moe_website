"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, Edit3, ImagePlus, MessageSquareText, Search, Star, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { defaultProjects, defaultQuoteRequests, defaultReviews, type AdminProject, type AdminReview, type QuoteRequest, type QuoteStatus } from "@/lib/adminData";

type AdminPanelProps = {
  view: "dashboard" | "quotes" | "gallery" | "reviews";
};

type DashboardCard = {
  label: string;
  getValue: (quotes: QuoteRequest[], projects: AdminProject[], reviews: AdminReview[]) => number;
  icon: LucideIcon;
};

const quoteKey = "moe_quote_requests";
const projectKey = "moe_gallery_projects";
const reviewKey = "moe_reviews";
const password = "moe-admin";
const dashboardCards: DashboardCard[] = [
  { label: "Total Requests", getValue: (quotes: QuoteRequest[], projects: AdminProject[], reviews: AdminReview[]) => quotes.length, icon: BarChart3 },
  { label: "Emergency Requests", getValue: (quotes: QuoteRequest[]) => quotes.filter((quote) => quote.emergency === "Yes").length, icon: MessageSquareText },
  { label: "Gallery Photos", getValue: (_quotes: QuoteRequest[], projects: AdminProject[]) => projects.length, icon: ImagePlus },
  { label: "Reviews", getValue: (_quotes: QuoteRequest[], _projects: AdminProject[], reviews: AdminReview[]) => reviews.length, icon: Star }
];

function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(window.localStorage.getItem(key) || "") as T;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function AdminPanel({ view }: AdminPanelProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [quotes, setQuotes] = useState<QuoteRequest[]>(defaultQuoteRequests);
  const [projects, setProjects] = useState<AdminProject[]>(defaultProjects);
  const [reviews, setReviews] = useState<AdminReview[]>(defaultReviews);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | QuoteStatus>("All");

  useEffect(() => {
    setUnlocked(window.sessionStorage.getItem("moe_admin_unlocked") === "true");
    setQuotes(readLocal(quoteKey, defaultQuoteRequests));
    setProjects(readLocal(projectKey, defaultProjects));
    setReviews(readLocal(reviewKey, defaultReviews));
  }, []);

  const filteredQuotes = useMemo(() => {
    return quotes.filter((quote) => {
      const matchesFilter = filter === "All" || quote.status === filter;
      const haystack = `${quote.fullName} ${quote.phone} ${quote.area} ${quote.service} ${quote.message}`.toLowerCase();
      return matchesFilter && haystack.includes(search.toLowerCase());
    });
  }, [quotes, filter, search]);

  function login() {
    if (passwordValue === password) {
      window.sessionStorage.setItem("moe_admin_unlocked", "true");
      setUnlocked(true);
    }
  }

  function updateQuoteStatus(id: string, status: QuoteStatus) {
    const next = quotes.map((quote) => (quote.id === id ? { ...quote, status } : quote));
    setQuotes(next);
    writeLocal(quoteKey, next);
  }

  function addProject() {
    const next = [{ id: `PR-${Date.now()}`, title: "New Project", category: "Residential", label: "Before / After" }, ...projects];
    setProjects(next);
    writeLocal(projectKey, next);
  }

  function updateProject<K extends keyof AdminProject>(id: string, field: K, value: AdminProject[K]) {
    const next = projects.map((project) => (project.id === id ? { ...project, [field]: value } : project));
    setProjects(next);
    writeLocal(projectKey, next);
  }

  function deleteProject(id: string) {
    const next = projects.filter((project) => project.id !== id);
    setProjects(next);
    writeLocal(projectKey, next);
  }

  function addReview() {
    const next = [{ id: `RV-${Date.now()}`, name: "New Review", area: "Beirut", rating: 5, quote: "Add customer review text." }, ...reviews];
    setReviews(next);
    writeLocal(reviewKey, next);
  }

  function updateReview<K extends keyof AdminReview>(id: string, field: K, value: AdminReview[K]) {
    const next = reviews.map((review) => (review.id === id ? { ...review, [field]: value } : review));
    setReviews(next);
    writeLocal(reviewKey, next);
  }

  function deleteReview(id: string) {
    const next = reviews.filter((review) => review.id !== id);
    setReviews(next);
    writeLocal(reviewKey, next);
  }

  if (!unlocked) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-7 shadow-premium">
          <h1 className="text-3xl font-black text-ink">Admin Login</h1>
          <p className="mt-3 leading-7 text-slate-600">Enter the local demo password to manage quote requests, gallery projects, and reviews.</p>
          <input className="input-field mt-5" type="password" value={passwordValue} onChange={(event) => setPasswordValue(event.target.value)} placeholder="Password" />
          <button onClick={login} className="mt-4 min-h-12 w-full rounded-md bg-electric px-5 py-3 text-sm font-black text-ink">Unlock Dashboard</button>
          <p className="mt-3 text-xs text-slate-500">Demo password: moe-admin</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-steel">Admin</p>
            <h1 className="mt-2 text-4xl font-black text-ink">Lead Management</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ["Dashboard", "/admin"],
              ["Quote Requests", "/admin/quote-requests"],
              ["Gallery Manager", "/admin/gallery"],
              ["Reviews Manager", "/admin/reviews"]
            ].map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-black text-ink transition hover:border-electric">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {view === "dashboard" ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardCards.map(({ label, getValue, icon: Icon }) => (
              <article key={label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-electric" aria-hidden="true" />
                <p className="mt-5 text-3xl font-black text-ink">{getValue(quotes, projects, reviews)}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{label}</p>
              </article>
            ))}
          </div>
        ) : null}

        {view === "quotes" ? (
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <label className="relative flex-1">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
                <input className="input-field pl-10" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search requests..." />
              </label>
              <select className="input-field md:max-w-48" value={filter} onChange={(event) => setFilter(event.target.value as "All" | QuoteStatus)}>
                {["All", "New", "Contacted", "Completed"].map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr><th className="p-3">Name</th><th className="p-3">Phone</th><th className="p-3">Area</th><th className="p-3">Service</th><th className="p-3">Emergency</th><th className="p-3">Photos</th><th className="p-3">Status</th></tr>
                </thead>
                <tbody>
                  {filteredQuotes.map((quote) => (
                    <tr key={quote.id} className="border-t border-slate-100">
                      <td className="p-3 font-bold text-ink">{quote.fullName}</td>
                      <td className="p-3">{quote.phone}</td>
                      <td className="p-3">{quote.area}</td>
                      <td className="p-3">{quote.service}</td>
                      <td className="p-3">{quote.emergency}</td>
                      <td className="p-3">{quote.photos.length}</td>
                      <td className="p-3">
                        <select className="rounded-md border border-slate-200 px-3 py-2" value={quote.status} onChange={(event) => updateQuoteStatus(quote.id, event.target.value as QuoteStatus)}>
                          {["New", "Contacted", "Completed"].map((status) => <option key={status}>{status}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {view === "gallery" ? (
          <ManagerList title="Gallery Manager" onAdd={addProject} addLabel="Add project">
            {projects.map((project) => (
              <div key={project.id} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 md:grid-cols-[1fr_1fr_1fr_auto]">
                <input className="input-field" value={project.title} onChange={(event) => updateProject(project.id, "title", event.target.value)} />
                <input className="input-field" value={project.category} onChange={(event) => updateProject(project.id, "category", event.target.value)} />
                <input className="input-field" value={project.label} onChange={(event) => updateProject(project.id, "label", event.target.value)} />
                <IconButton label="Delete project" onClick={() => deleteProject(project.id)} />
              </div>
            ))}
          </ManagerList>
        ) : null}

        {view === "reviews" ? (
          <ManagerList title="Reviews Manager" onAdd={addReview} addLabel="Add review">
            {reviews.map((review) => (
              <div key={review.id} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 lg:grid-cols-[0.8fr_0.8fr_0.4fr_1.4fr_auto]">
                <input className="input-field" value={review.name} onChange={(event) => updateReview(review.id, "name", event.target.value)} />
                <input className="input-field" value={review.area} onChange={(event) => updateReview(review.id, "area", event.target.value)} />
                <input className="input-field" type="number" min={1} max={5} value={review.rating} onChange={(event) => updateReview(review.id, "rating", Number(event.target.value))} />
                <input className="input-field" value={review.quote} onChange={(event) => updateReview(review.id, "quote", event.target.value)} />
                <IconButton label="Delete review" onClick={() => deleteReview(review.id)} />
              </div>
            ))}
          </ManagerList>
        ) : null}
      </div>
    </section>
  );
}

function ManagerList({ title, onAdd, addLabel, children }: { title: string; onAdd: () => void; addLabel: string; children: ReactNode }) {
  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-ink">{title}</h2>
        <button onClick={onAdd} className="inline-flex items-center gap-2 rounded-md bg-electric px-4 py-3 text-sm font-black text-ink">
          <Edit3 className="h-4 w-4" aria-hidden="true" />
          {addLabel}
        </button>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}

function IconButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-700 transition hover:bg-red-100">
      <Trash2 className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
