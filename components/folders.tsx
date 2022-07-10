import utilStyles from "../styles/utils.module.css";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import Bookmarks from "./bookmarks";

export default function Folders() {

    const folders = useLiveQuery(async () => {
        return db.folders.toArray();
    });

    if (!folders) return null;

    return (
        <div className="flex flex-wrap justify-evenly">
            {folders.map(folder => (
                <div className={utilStyles.folder} key={folder.id}>
                    <h3>{folder.name}</h3>
                    <Bookmarks folderId={folder.id}></Bookmarks>
                </div>
            ))}
        </div>
    )
}