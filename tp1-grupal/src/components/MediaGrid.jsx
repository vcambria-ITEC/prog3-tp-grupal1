import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

export default function MediaGrid({ title, items }) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-12">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-1.5 h-10 bg-[#1DE9B6] rounded-full shadow-[0_0_15px_#1DE9B6]"></div>
        <h2 className="text-4xl font-bold text-white tracking-tight uppercase italic">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {items.map((item) => {
          const href = item.type === "show" ? `/shows/${item.id}` : `/movies/${item.id}`;
          return (
            <div key={item.id} className="flex flex-col gap-4 group">
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-[#0F0F12] border border-zinc-800 group-hover:border-[#7C4DFF] transition-all duration-500 shadow-2xl">
                <Image
                  src={item.image.poster}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Link
                    href={href}
                    className="px-8 py-3 bg-[#1DE9B6] text-black font-black uppercase tracking-tighter rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(29,233,182,0.5)]"
                  >
                    Ver más
                  </Link>
                  <FavoriteButton mediaId={item.id} />
                </div>
              </div>

              <div className="flex flex-col gap-2 px-1">
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#1DE9B6] transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center justify-center rounded border border-[#00BFA5] px-2 py-0.5 text-[11px] font-black text-[#1DE9B6] uppercase">
                    {item.details.rating}★
                  </span>
                  <span className="text-zinc-400 font-medium tracking-wide uppercase text-xs">
                    {item.category} • {item.details.duration}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
