import { getMoviesByGenre, getGenres } from "@/lib/tmdb";
import MediaGrid from "@/components/MediaGrid";
import { notFound } from "next/navigation";

export default async function MovieGenrePage({ params }) {
  const { genreId } = await params;

  const [movies, allGenres] = await Promise.all([
    getMoviesByGenre(genreId),
    getGenres("movie"),
  ]);

  const currentGenre = allGenres.find((g) => g.id.toString() === genreId);

  if (!currentGenre) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <main className="w-full">
        <MediaGrid title={`Películas de ${currentGenre.name}`} items={movies} />
      </main>
    </div>
  );
}
