import { getShows } from "@/lib/data";
import MediaGrid from "@/components/MediaGrid";

export default function ShowsPage() {
  
  const allShows = getShows();

  return (
    <div className="flex flex-col min-h-screen bg-black pt-24 pb-12">
      <main className="flex-1 w-full">
        
        <MediaGrid title="Todas las Series" items={allShows} />
      </main>
    </div>
  );
}