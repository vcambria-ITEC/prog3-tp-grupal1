import Image from "next/image";

export default function ContentCard({ 
  title, 
  imageSrc, 
  rating, 
  genre
}) {
  return (
    <div className="flex w-48 flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md bg-zinc-800">
        <Image
          src={imageSrc}
          alt={`Poster for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-white truncate">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          {rating && (
            <span className="flex items-center justify-center rounded border border-gray-600 px-1.5 py-0.5 text-[10px] font-bold leading-none text-gray-400">
              {rating}
            </span>
          )}
          <span className="truncate">
            {genre}
          </span>
        </div>
      </div>
    </div>
  );
}