import Link from "next/link";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/layout/header";
import {SONGS} from "@/data/data";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Header title={"Parole Chretienne"} />
        <div className="sub-head">
          <ul className="flex justify-around px-8 py-4 font-bold border-t border-b border-border">
            <li>
              <Link href="/filter-page/theme-filter">Theme</Link>
            </li>
            <li>
              <Link href="/filter-page/aphabet-filter">Alphabet</Link>
            </li>
            <li>
              <Link href="/filter-page/num-filter">Numero</Link>
            </li>
          </ul>
        </div>
        <main className="flex-1 w-full my-4">
          <div className="w-4/5 mx-auto flex flex-col items-center justify-center gap-4">
            {SONGS.map((musique) => (
              <Link className="w-full" key={musique.id} href="/">
                <Card>
                  <CardHeader>
                    <CardTitle>{musique.titre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{musique.id > 9 ? (`0${musique.id}`) : (`00${musique.id}`)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
