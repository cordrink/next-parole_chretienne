import {SONGS} from "@/data/data";

type PageProps = {
    params: Promise<{songId: number}>
}

export default async function Page({params} : PageProps) {
   /* const params = await params;
    const song = SONGS.find(song => song.id === params.songId);*/

    return (
        <div>
            {}
        </div>
    )
}