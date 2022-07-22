import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import Image from "next/image";

export default function Bookmarks({ folderId }: {folderId: number | undefined}) {
    const bookmarks = useLiveQuery(
        async () => db.bookmarks.where({folderId: folderId}).toArray(),
        [folderId]
    );

    if (!bookmarks) return null;

    return (
        <ul className="list-none mt-2">
            {bookmarks.map(bookmark => (
                <li key={bookmark.url} className="truncate leading-loose">
                    <a className="no-underline hover:underline" href={bookmark.url}>
                        {bookmark.icon && <Image src={bookmark.icon} width={12} height={12}/>} {bookmark.title}
                        </a>
                </li>
            ))}
        </ul>
    )
}