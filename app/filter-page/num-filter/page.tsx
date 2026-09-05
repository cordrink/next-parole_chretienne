import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/header";

const musiquesParNumero = [
  { title: "A Celui qui nous a sauves.", numero: "007" },
  { title: "A Toi la Gloire !", numero: "118" },
  { title: "Dans Sa Présence", numero: "023" },
  { title: "Saint-Esprit", numero: "045" },
];

export default function NumFilterPage() {
  return (
    <>
      <div className="w-full">
        <Header />
        <div className="sub-head">
          <ul className="flex justify-around px-8 py-4 font-bold border-t border-b border-border">
            <li>
              <Link href="/filter-page/theme-filter">Theme</Link>
            </li>
            <li>
              <Link href="/filter-page/aphabet-filter">Alphabet</Link>
            </li>
            <li>
              <Link href="/filter-page/num-filter" className="text-primary">Numero</Link>
            </li>
          </ul>
        </div>
        <main className="flex-1 w-full my-4">
          <div className="w-4/5 mx-auto flex flex-col items-center justify-center gap-4">
            {musiquesParNumero
              .sort((a, b) => Number(a.numero) - Number(b.numero))
              .map((musique) => (
                <Link className="w-full" key={musique.numero} href="/">
                  <Card>
                    <CardHeader>
                      <CardTitle>{musique.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{musique.numero.padStart(3, "0")}</p>
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
