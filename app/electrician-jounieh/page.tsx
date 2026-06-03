import type { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("electrician-jounieh")!;

export const metadata: Metadata = {
  title: "Electrician in Jounieh",
  description: "Electrician in Jounieh for generator installation, panel service, lighting upgrades, smart home wiring, emergency repairs, and residential electrical work."
};

export default function ElectricianJouniehPage() {
  return <ServiceAreaTemplate area={area} />;
}
