import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
      <button
        type="button"
        className="p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Ouvrir le menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-semibold">
        <Link href="/">Parole Chrétienne</Link>
      </h1>
      <button
        type="button"
        className="p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Rechercher"
      >
        <Search className="w-5 h-5" />
      </button>
    </header>
  );
}
