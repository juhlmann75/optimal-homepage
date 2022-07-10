import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import utilStyles from "../styles/utils.module.css";

export default function Bookmarks({ folderId }: {folderId: number | undefined}) {
    const bookmarks = useLiveQuery(
        async () => db.bookmarks.where({folderId: folderId}).toArray(),
        [folderId]
    );

    if (!bookmarks) return null;

    return (
        <ul className={utilStyles.list}>
            {bookmarks.map(bookmark => (
                <li key={bookmark.url} className={utilStyles.listItem}>
                    <a href={bookmark.url}>{bookmark.title}</a>
                </li>
            ))}
        </ul>
    )
}