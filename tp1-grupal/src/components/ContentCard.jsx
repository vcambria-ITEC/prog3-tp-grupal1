import Image from "next/image";
import Link from "next/link";

export default function ContentCard({ media }) {
  const href = media.type === "show" ? `/shows/${media.id}` : `/movies/${media.id}`;

  return (
    <div className="flex w-96 flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-md bg-zinc-800 border border-zinc-800 group-hover:border-[#7C4DFF] transition-all duration-500 shadow-2xl">
        <Image
          src={media.image?.poster}
          alt={`Poster for ${media.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <Link 
            href={href}
            className="bg-[#33f3cd] text-black font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#28dfbc]"
          >
            Ver más
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-white truncate">
          {media.name}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          {media.details?.rating && (
            <span className="flex items-center justify-center rounded border border-gray-600 px-1.5 py-0.5 text-[10px] font-bold leading-none text-gray-400">
              {media.details?.rating}
            </span>
          )}
          <span className="truncate">
            {media.category}
          </span>
        </div>
      </div>
    </div>
  );
}