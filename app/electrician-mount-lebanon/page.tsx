import type { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("electrician-mount-lebanon")!;

export const metadata: Metadata = {
  title: "Electrician in Mount Lebanon",
  description: "Trusted electrician in Mount Lebanon for residential electrical services, commercial electrical services, emergency electrician work, generator installation, and panel upgrades."
};

export default function ElectricianMountLebanonPage() {
  return <ServiceAreaTemplate area={area} />;
}
