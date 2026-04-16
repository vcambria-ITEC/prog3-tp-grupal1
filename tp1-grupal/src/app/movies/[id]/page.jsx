import { getMediaById } from "@/lib/data";
import DetailHero from "@/components/DetailHero";
import Link from "next/link";

export default async function MovieDetailPage({ params }) {
  const { id } = await params;
  const movie = getMediaById(id);

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-6">
        <h1 className="text-4xl font-black text-[#1DE9B6] uppercase italic tracking-tighter">
          Contenido no encontrado
        </h1>
        <p className="text-zinc-400 text-lg">El ID '{id}' no corresponde a ninguna película en nuestro catálogo.</p>
        <Link 
          href="/movies" 
          className="px-6 py-2 border-2 border-[#1DE9B6] text-[#1DE9B6] rounded-full font-bold hover:bg-[#1DE9B6] hover:text-black transition"
        >
          &larr; Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1 w-full">
        <DetailHero content={movie} />
      </main>
    </div>
  );
}