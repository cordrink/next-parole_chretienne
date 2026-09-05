import {SONGS} from "@/data/data";
import { Card , CardContent} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PageProps = {
    params: Promise<{ songId: string }>
}

export default async function Page({params}: PageProps) {
    const {songId} = await params;
    const song = SONGS.find((song) => song.id === Number(songId));

    console.log("songId: ", songId ,"song:", song );

    if (!song) {
        return <>Page not found...</>;
    }

    return (
        <div  className="w-4/5 m-auto mt-4">
            <Button>
                <Link href="/filter-page/num-filter" >← Retour </Link>
            </Button>

            <Card className="mt-4">
                <CardContent className="h-[74vh] overflow-auto p-6">
                    <pre>{song.paroles}</pre>
                </CardContent>
            </Card>
            <div>

            </div>
        </div>
    )
}