import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Product Management",
  robots: { index: false, follow: false }
};

export default function ProductManagementPage() {
  return <AdminPanel view="products" />;
}
