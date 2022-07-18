import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../models/db";
import Bookmarks from "./bookmarks";
import BookmarksUpload from "./bookmarksUpload";
import ToggleButton from "./toggleButton";
import BookmarksUploadModal from "./bookmarksUploadModal";

export default function Folders() {

    const folders = useLiveQuery(async () => {
        return db.folders.toArray();
    });

    if (!folders || folders.length == 0) {
        return (
            <div className="box-content md:mx-auto px-4">
                <BookmarksUpload></BookmarksUpload>
            </div>
        )
    }

    return (
        <div>
            <BookmarksUploadModal></BookmarksUploadModal>
            <div className="flex flex-wrap justify-center">
                {folders.map(folder => (
                    <div className="border-solid border-2 border-sky-500 rounded p-2 m-3 w-80" key={folder.id}>
                        <h3 className="text-2xl font-bold">{folder.name}</h3>
                        <Bookmarks folderId={folder.id}></Bookmarks>
                    </div>
                ))}
            </div>
        </div>
    )
}