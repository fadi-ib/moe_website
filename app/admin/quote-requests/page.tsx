import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Quote Requests",
  robots: { index: false, follow: false }
};

export default function QuoteRequestsPage() {
  return <AdminPanel view="quotes" />;
}
