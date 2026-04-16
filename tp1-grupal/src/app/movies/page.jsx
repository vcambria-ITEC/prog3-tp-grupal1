import { getMovies } from "@/lib/data";
import MediaGrid from "@/components/MediaGrid";

export default function MoviesPage() {
  const allMovies = getMovies();

  return (
    <div className="min-h-screen bg-[#0F0F12] pt-24 pb-20">
      <main className="w-full">
        <MediaGrid title="Todas las Películas" items={allMovies} />
      </main>
    </div>
  );
}