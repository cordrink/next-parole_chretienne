import Image from "next/image";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <div className="w-full">
                <header className=" flex items-center justify-between px-4 py-3 border-b border-border bg-blue-500 text-white">
                    <button
                        type="button"
                        className="p-2 rounded-md hover:bg-muted hover:text-blue-400 transition-colors"
                        aria-label="Ouvrir le menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <h1 className="text-lg font-semibold">Parole Crétienne</h1>
                    <button
                        type="button"
                        className="p-2 rounded-md hover:bg-muted transition-colors"
                        aria-label="Rechercher"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </header>
                <div className="sub-head">
                    <ul className="flex justify-between px-8 py-4 font-bold  border border-t-0">
                        <li>
                            <Link href="/">Theme</Link>
                        </li>
                        <li>
                            <Link href="/">Alphabet</Link>
                        </li>
                        <li>
                            <Link href="/">Numero</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="flex-1 w-full max-w-4xl">
                <div>
                    <Link href={"/"}></Link>
                </div>
            </main>
        </div>
    );
}
