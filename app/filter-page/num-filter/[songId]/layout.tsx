import {PropsWithChildren} from "react";
import Header from "@/components/layout/header";
import {SONGS} from "@/data/data";

export default async function Layout(props: PropsWithChildren<{ params: Promise<{ songId: string }> }>) {
    const {songId} = await props.params;

    const song = SONGS.find(song => song.id === Number(songId));

    if (!song) {
        return <>Pas de music a ce nom</>
    }

    return (
        <div>
            <Header title={song.titre}/>
            {props.children}
        </div>
    )
}