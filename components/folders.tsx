import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import Bookmarks from "./bookmarks";
import BookmarksUpload from "./bookmarksUpload";

export default function Folders() {

    const folders = useLiveQuery(async () => {
        return db.folders.toArray();
    });

    if (!folders || folders.length == 0) {
        return (
            <div className="box-content md:mx-auto p-4">
                <BookmarksUpload></BookmarksUpload>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap justify-center">
            {folders.map(folder => (
                <div className="border-solid border-2 border-sky-500 rounded p-2 m-3 w-80" key={folder.id}>
                    <h3 className="text-2xl font-bold mb-2">{folder.name}</h3>
                    <hr/>
                    <Bookmarks folderId={folder.id}></Bookmarks>
                </div>
            ))}
        </div>
    )
}