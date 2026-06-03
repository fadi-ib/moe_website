import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false }
};

export default function AdminDashboardPage() {
  return <AdminPanel view="dashboard" />;
}
