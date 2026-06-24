"use client";
import { useFavorites } from "@/lib/FavoritesContext";
import ContentCard from "@/components/ContentCard";

export default function MyListClient() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col min-h-screen bg-black pt-28 pb-12">
      <main className="max-w-[1400px] mx-auto w-full px-10 flex-1">

        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Mis Favoritos
          </h1>
          <div className="h-1 w-16 bg-[#33f3cd] rounded-full shadow-[0_0_10px_#33f3cd]" />
        </div>

        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-6">
            {favorites.map((media) => (
              <ContentCard key={media.id} media={media} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 border border-zinc-900 rounded-lg bg-zinc-950/50">
            <span className="text-4xl mb-4">🎬</span>
            <h3 className="text-xl font-bold text-white mb-2">Tu lista está vacía</h3>
            <p className="text-gray-400">Aún no has agregado ninguna serie o película a tus favoritos.</p>
          </div>
        )}

      </main>
    </div>
  );
}
