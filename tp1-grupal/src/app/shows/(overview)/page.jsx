import { getShows } from "@/lib/tmdb";
import MediaGrid from "@/components/MediaGrid";

export default async function ShowsPage() {
  const allShows = await getShows();

  return (
    <div className="flex flex-col min-h-screen bg-black pt-24 pb-12">
      <main className="flex-1 w-full">
        <MediaGrid title="Todas las Series" items={allShows} />
      </main>
    </div>
  );
}
