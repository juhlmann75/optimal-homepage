import path from 'path';
import fs from 'fs';
import parse from "node-bookmarks-parser";
import {Bookmark} from "node-bookmarks-parser/build/interfaces/bookmark";

const bookmarksPath = path.join(process.cwd(), 'public/files/bookmarks.html');


export function getBookmarksData()  {
    const bookmarksContent = fs.readFileSync(bookmarksPath, 'utf8');
    const bookmarksData = parse(bookmarksContent);

    return getBookmarksContent(bookmarksData, []);
}

export function getBookmarksContent(bookmarks: Bookmark[] | undefined, bookmarksList: Bookmark[]) {
    if (bookmarks == undefined) {
        return bookmarksList;
    }
    bookmarks.forEach(value => {
        if (value.type == "folder"){
            bookmarksList.push({title:value.title, url:""});
            return getBookmarksContent(value.children, bookmarksList);
        }
        if (value.type == "bookmark") {
            const bookmarkItem = {title: value.title, url: value.url};
            bookmarksList.push(bookmarkItem);
            return bookmarksList;
        }
    })
    return bookmarksList;
}