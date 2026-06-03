import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Gallery Manager",
  robots: { index: false, follow: false }
};

export default function GalleryManagerPage() {
  return <AdminPanel view="gallery" />;
}
