export default function ShowsLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0F0F12]">
      <aside className="w-52 bg-[#0F0F12] border-r border-zinc-800 pt-32 px-8 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="mb-10">
          <h3 className="text-[#1DE9B6] font-black uppercase tracking-widest text-xs mb-6 shadow-[0_0_10px_rgba(29,233,182,0.2)]">
            Explorar Series
          </h3>
          <nav className="flex flex-col gap-6">
            <SidebarLink label="Populares" active />
            <SidebarLink label="Novedades" />
            <SidebarLink label="Mejor Valoradas" />
            <SidebarLink label="Mi Lista" />
          </nav>
        </div>

        <div>
          <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-6">
            Géneros
          </h3>
          <nav className="flex flex-col gap-4">
            <button className="text-left text-zinc-400 text-sm hover:text-[#1DE9B6] transition-colors">Ciencia Ficción</button>
            <button className="text-left text-zinc-400 text-sm hover:text-[#1DE9B6] transition-colors">Drama</button>
            <button className="text-left text-zinc-400 text-sm hover:text-[#1DE9B6] transition-colors">Acción</button>
          </nav>
        </div>
      </aside>

      {/* 2. Contenido de la Página */}
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ label, active = false }) {
  return (
    <button className={`text-left text-sm font-bold transition-all ${
      active ? "text-white flex items-center gap-2" : "text-zinc-500 hover:text-zinc-300"
    }`}>
      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6] shadow-[0_0_8px_#1DE9B6]" />}
      {label}
    </button>
  );
}