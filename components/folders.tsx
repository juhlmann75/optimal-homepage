import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import Bookmarks from "./bookmarks";

export default function Folders() {

    const folders = useLiveQuery(async () => {
        return db.folders.toArray();
    });

    if (!folders) return null;

    return (
        <div className="flex flex-wrap justify-center">
            {folders.map(folder => (
                <div className="border-solid border-2 border-sky-500 rounded p-2 m-3 w-80" key={folder.id}>
                    <h3 className="text-2xl font-bold">{folder.name}</h3>
                    <Bookmarks folderId={folder.id}></Bookmarks>
                </div>
            ))}
        </div>
    )
}