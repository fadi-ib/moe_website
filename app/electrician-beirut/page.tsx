import type { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("electrician-beirut")!;

export const metadata: Metadata = {
  title: "Electrician in Beirut",
  description: "Emergency electrician in Beirut for electrical repairs, lighting installation, panel upgrades, generator electrical work, residential service, and commercial electrical services."
};

export default function ElectricianBeirutPage() {
  return <ServiceAreaTemplate area={area} />;
}
