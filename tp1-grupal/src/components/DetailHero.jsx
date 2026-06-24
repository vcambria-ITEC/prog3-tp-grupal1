import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

export default function DetailHero({ content }) {
  // Determinamos a dónde tiene que volver dependiendo si es peli o serie
  const backUrl = content.type === 'movie' ? '/movies' : '/shows';

  return (
    <section className="relative min-h-[90vh] w-full flex items-center px-12 pt-32 pb-16">
      {/* Fondo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
            backgroundImage: content?.image?.backdrop 
              ? `linear-gradient(to right, rgba(0,0,0,0.9), transparent 80%), 
                 linear-gradient(to top, black, transparent 50%),
                 url('${content.image.backdrop}')`
              : "none"
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start gap-4">
        
        {/* BOTÓN DE VOLVER */}
        <Link 
          href={backUrl} 
          className="text-zinc-400 hover:text-white text-sm font-bold transition-colors flex items-center gap-2 mb-2 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md border border-zinc-700/50 hover:border-zinc-500"
        >
          &larr; Volver al catálogo
        </Link>

        {/* Etiqueta superior */}
        <span className="text-[#1DE9B6] font-bold tracking-widest uppercase text-sm mt-2">
           {content.type === 'movie' ? 'Película' : 'Serie'}
        </span>
        
        {/* Título  */}
        <h1 className="text-7xl font-black text-white uppercase italic tracking-tighter">
          {content.name}
        </h1>
        
        {/* información técnica */}
        <div className="flex items-center gap-4 text-gray-300 text-sm font-medium mt-2">
          <span>2024</span>
          <span>{content?.details?.duration}</span>
          <span className="text-yellow-400 font-bold">★ {content?.details?.rating}</span>
          <span className="text-gray-500">|</span>
          <span className="text-[#1DE9B6] font-bold uppercase tracking-wider text-xs bg-[#1DE9B6]/10 px-2 py-1 rounded-full">
            {content.category}
          </span>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mt-4">
          {content?.details?.description}
        </p>

        {/* Reparto */}
        {content.details?.cast && (
          <div className="pt-2 pb-2">
            <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">
              Reparto principal
            </h3>
            <p className="text-zinc-100 text-base leading-snug">
              {content.details.cast.join(", ")}
            </p>
          </div>
        )}

        {/*  botones */}
        <div className="flex gap-4 pt-6">
          <button className="flex items-center gap-2 bg-[#1DE9B6] text-black px-10 py-3 rounded-full font-black uppercase tracking-tight hover:bg-white transition-all shadow-[0_0_15px_rgba(29,233,182,0.4)]">
            <span className="text-xl">▶</span> Ver Ahora
          </button>
          <FavoriteButton media={content} />
        </div>
      </div>
    </section>
  );
}