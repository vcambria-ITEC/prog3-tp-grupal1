import { getMovies } from "@/lib/tmdb";
import MediaGrid from "@/components/MediaGrid";

export default async function MoviesPage() {
  const allMovies = await getMovies();

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <main className="w-full">
        <MediaGrid title="Todas las Películas" items={allMovies} />
      </main>
    </div>
  );
}
