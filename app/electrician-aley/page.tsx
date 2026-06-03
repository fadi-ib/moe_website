import type { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("electrician-aley")!;

export const metadata: Metadata = {
  title: "Electrician in Aley",
  description: "Electrician in Aley for emergency repairs, generator electrical work, lighting installation, wiring, rewiring, panel upgrades, and residential electrical services."
};

export default function ElectricianAleyPage() {
  return <ServiceAreaTemplate area={area} />;
}
