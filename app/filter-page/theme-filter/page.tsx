import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/header";

const musiquesParTheme = [
  { title: "A Celui qui nous a sauves.", numero: "007", theme: "Louange" },
  { title: "A Toi la Gloire !", numero: "118", theme: "Louange" },
  { title: "Dans Sa Présence", numero: "23", theme: "Adoration" },
  { title: "Saint-Esprit", numero: "45", theme: "Adoration" },
];

export default function ThemeFilterPage() {
  return (
    <>
      <div className="w-full">
        <Header title={"Parole chretienne"} />
        <div className="sub-head">
          <ul className="flex justify-around px-8 py-4 font-bold border-t border-b border-border">
            <li>
              <Link href="/filter-page/theme-filter" className="text-primary">Theme</Link>
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
            {musiquesParTheme.map((musique) => (
              <Link className="w-full" key={musique.numero} href="/filter-page/theme-filter">
                <Card>
                  <CardHeader>
                    <CardTitle>{musique.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{musique.theme} • {musique.numero}</p>
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
