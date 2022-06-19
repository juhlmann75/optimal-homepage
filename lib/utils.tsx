import path from 'path';
import fs from 'fs';
import {getBookmarksData} from "../components/bookmark";

const bookmarksPath = path.join(process.cwd(), 'public/files/bookmarks.html');

export function getBookmarksDataFromFile() {
    const bookmarksContent = fs.readFileSync(bookmarksPath, 'utf8');
    return getBookmarksData(bookmarksContent);
}


