export default function Hero({ content }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center px-12">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
            backgroundImage: content?.image?.backdrop 
              ? `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url('${content.image.backdrop}')`
              : "none"
        }}
      />
      
      <div className="relative z-10 max-w-2xl space-y-4">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
          Featured {content.type}
        </span>
        <h1 className="text-6xl font-black text-white uppercase italic">
          {content.name}
        </h1>
        <div className="flex items-center gap-4 text-gray-300 text-sm">
          <span>2024</span>
          <span className="border border-gray-500 px-1 text-xs">16+</span>
          <span>{content?.details?.duration}</span>
          <span className="text-yellow-400">★ {content?.details?.rating}</span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          {content?.details?.description}
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-cyan-400 text-black px-8 py-3 rounded font-bold hover:bg-cyan-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-500/50 text-white px-8 py-3 rounded font-bold backdrop-blur-md hover:bg-gray-500/70 transition">
            ⓘ More Info
          </button>
        </div>
      </div>
    </section>
  );
}