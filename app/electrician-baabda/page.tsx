import type { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("electrician-baabda")!;

export const metadata: Metadata = {
  title: "Electrician in Baabda",
  description: "Professional electrician in Baabda for breaker repairs, panel upgrades, lighting installation, emergency electrician service, and residential electrical services."
};

export default function ElectricianBaabdaPage() {
  return <ServiceAreaTemplate area={area} />;
}
