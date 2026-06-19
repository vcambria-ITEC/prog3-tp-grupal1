"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBarLayout({ children, genres = [], type = "movies" }) {
  const pathName = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0F0F12]">
      <aside className="w-60 bg-[#0F0F12] border-r border-zinc-800 pt-32 px-8 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="mb-10">
          <h3 className="text-[#1DE9B6] font-black uppercase tracking-widest text-xs mb-6">
            Explorar {type === "movies" ? "Películas" : "Series"}
          </h3>
          <nav className="flex flex-col gap-6">
            <SidebarLink 
              href={`/${type}`} 
              label="Todo" 
              active={pathName === `/${type}`} 
            />
            <SidebarLink 
              href="/mylist" 
              label="Mi Lista" 
              active={pathName === "/mylist"} 
            />
          </nav>
        </div>

        <div>
          <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-6">
            Géneros
          </h3>
          <nav className="flex flex-col gap-4 max-h-[45vh] overflow-y-auto no-scrollbar pb-12">
            {genres.map((genre) => {
              const href = `/${type}/genre/${genre.id}`;
              const isActive = pathName === href;
              return (
                <Link
                  key={genre.id}
                  href={href}
                  className={`text-left text-sm font-semibold transition-colors ${
                    isActive ? "text-[#1DE9B6]" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {genre.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ href, label, active = false }) {
  return (
    <Link 
      href={href} 
      className={`text-left text-sm font-bold transition-all ${
        active ? "text-white flex items-center gap-2" : "text-zinc-500 hover:text-zinc-300"
      }`}
    >
      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6] shadow-[0_0_8px_#1DE9B6]" />}
      {label}
    </Link>
  );
}