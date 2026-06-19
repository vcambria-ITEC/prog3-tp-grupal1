import { getShowsByGenre, getGenres } from "@/lib/tmdb";
import MediaGrid from "@/components/MediaGrid";
import { notFound } from "next/navigation";

export default async function ShowGenrePage({ params }) {
  const { genreId } = await params;

  const [shows, allGenres] = await Promise.all([
    getShowsByGenre(genreId),
    getGenres("tv"),
  ]);

  const currentGenre = allGenres.find((g) => g.id.toString() === genreId);

  if (!currentGenre) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black pt-24 pb-12">
      <main className="flex-1 w-full">
        <MediaGrid title={`Series de ${currentGenre.name}`} items={shows} />
      </main>
    </div>
  );
}
