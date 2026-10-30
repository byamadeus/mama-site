import { getPage } from "@/cms.config";
import { SliceZone } from "@/slices/slice-zone";

export default async function Home() {
  const page = await getPage("home");
  return (
    <div className="bg-black">
      <SliceZone slices={page.slices} />
    </div>
  );
}
