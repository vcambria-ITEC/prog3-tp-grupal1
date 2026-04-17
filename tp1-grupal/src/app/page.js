import { getMostRatedMedia, getTopFiveMedia } from "@/lib/data";
import Hero from "@/components/Hero";
import ContentCard from "@/components/ContentCard";

export default function Home() {
  const topMedia = getMostRatedMedia();
  const top5Media = getTopFiveMedia();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Hero content={topMedia}/>
        <section className="w-full px-12 mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">
              Populares en SyncFive
            </h2>
            <div className="h-1 w-12 bg-[#1DE9B6] rounded-full shadow-[0_0_10px_#1DE9B6]" />
          </div>

          <div className="flex justify-center flex-wrap gap-6 p-8 bg-black">
            {top5Media.map((media) => (
              <ContentCard 
                key={media.id} 
                media={media}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
