import { galleryProjects, reviews } from "@/lib/site";
import { productCategories, products } from "@/lib/products";
import type { Product } from "@/lib/products";

export type QuoteStatus = "New" | "Contacted" | "Completed";

export type QuoteRequest = {
  id: string;
  fullName: string;
  phone: string;
  area: string;
  service: string;
  emergency: "Yes" | "No";
  message: string;
  photos: string[];
  status: QuoteStatus;
  createdAt: string;
};

export type AdminProject = {
  id: string;
  title: string;
  category: string;
  label: string;
};

export type AdminReview = {
  id: string;
  name: string;
  area: string;
  rating: number;
  quote: string;
};

export const defaultQuoteRequests: QuoteRequest[] = [
  {
    id: "QR-1001",
    fullName: "Rania K.",
    phone: "+961 70 000 101",
    area: "Baabda",
    service: "Panel Upgrade",
    emergency: "No",
    message: "Breaker panel needs inspection and possible upgrade.",
    photos: ["panel-photo.jpg"],
    status: "New",
    createdAt: "2026-06-01"
  },
  {
    id: "QR-1002",
    fullName: "Joseph N.",
    phone: "+961 71 000 202",
    area: "Aley",
    service: "Emergency Service",
    emergency: "Yes",
    message: "Burning smell near outlet in kitchen.",
    photos: ["outlet-photo.jpg", "kitchen-photo.jpg"],
    status: "Contacted",
    createdAt: "2026-06-01"
  }
];

export const defaultProjects: AdminProject[] = galleryProjects.map((project, index) => ({
  id: `PR-${index + 1}`,
  title: project.title,
  category: project.category,
  label: project.label
}));

export const defaultReviews: AdminReview[] = reviews.map((review, index) => ({
  id: `RV-${index + 1}`,
  ...review
}));

export const defaultProducts: Product[] = products;

export const defaultProductCategories = productCategories.map((category) => category.name);

export const defaultProductBrands = Array.from(new Set(products.map((product) => product.brand))).sort();
