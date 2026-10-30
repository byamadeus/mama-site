import type { Metadata } from "next";
import { getPage } from "@/cms.config";
import { SliceZone } from "@/slices/slice-zone";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Coaching, speaking, facilitation, workshops and programming with Tatiana “Tajči” Cameron, PCC, NBC-HWC.",
};

export default async function CoachingPage() {
  const page = await getPage("coaching");
  return <SliceZone slices={page.slices} />;
}
