"use client";
import { useFavorites } from "@/lib/FavoritesContext";

export default function FavoriteButton({ mediaId }) {
  const { isFav, toggleFav } = useFavorites();
  const fav = isFav(mediaId);

  return (
    <button
      onClick={() => toggleFav(mediaId)}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase tracking-tight border-2 transition-all duration-300
        ${fav
          ? "bg-[#1DE9B6] border-[#1DE9B6] text-black shadow-[0_0_15px_rgba(29,233,182,0.4)]"
          : "bg-transparent border-zinc-600 text-zinc-400 hover:border-zinc-400 hover:text-white"
        }`}
    >
      {fav ? "♥ En mi lista" : "♡ Agregar a lista"}
    </button>
  );
}
