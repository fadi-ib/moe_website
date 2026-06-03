import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Reviews Manager",
  robots: { index: false, follow: false }
};

export default function ReviewsManagerPage() {
  return <AdminPanel view="reviews" />;
}
