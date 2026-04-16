"use client"; // Lo requerimos para poder usar el pathName y saber dónde está parado el usuario
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-10 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-12">
          <Link href="/" className="font-black tracking-tighter text-2xl text-[#6d28d9] uppercase hover:opacity-80 transition">
            SyncFive
          </Link>

          <div className="flex items-center gap-6">
            <NavItem href="/" label="Inicio" active={pathname === "/"} />
            <NavItem href="/shows" label="Series" active={pathname === "/shows"} />
            <NavItem href="/movies" label="Películas" active={pathname === "/movies"} />
          </div>
        </div>

        <div className="flex items-center gap-6 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <div className="w-8 h-8 bg-cyan-600 rounded-sm overflow-hidden border border-gray-600">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>

      </div>
    </nav>
  );
}

function NavItem({ href, label, active }) {
  return (
    <Link 
      href={href} 
      className={`relative py-2 text-sm transition-colors hover:text-white ${
        active ? "text-[#33f3cd] font-bold" : "text-gray-300 font-medium"
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#33f3cd] shadow-[0_0_8px_#33f3cd]" />
      )}
    </Link>
  );
}