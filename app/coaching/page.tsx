import type { Metadata } from "next";
import { cmsStore } from "@/cms.config";
import { SliceZone } from "@/slices/slice-zone";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Coaching, speaking, facilitation, workshops and programming with Tatiana “Tajči” Cameron, PCC, NBC-HWC.",
};

export default function CoachingPage() {
  const page = cmsStore.getPublished("coaching");
  return <SliceZone slices={page.slices} />;
}
