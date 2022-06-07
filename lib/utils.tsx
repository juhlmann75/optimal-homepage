import path from 'path';
import fs from 'fs';
import parse from "node-bookmarks-parser";
import {Bookmark} from "node-bookmarks-parser/build/interfaces/bookmark";

const bookmarksPath = path.join(process.cwd(), 'public/files/bookmarks.html');


export function getBookmarksData()  {
    const bookmarksContent = fs.readFileSync(bookmarksPath, 'utf8');
    const bookmarksData = parse(bookmarksContent);

    return getBookmarksContent(bookmarksData, {}, '');
}

export function getBookmarksContent(bookmarks: Bookmark[] | undefined, bookmarksMap: any, folder: string | undefined) {
    if (bookmarks == undefined) {
        return bookmarksMap;
    }
    bookmarks.forEach(value => {
        if (value.type == "folder" || value.children != undefined){
            const folderName = value.title != undefined ? value.title : 'Folder';
            bookmarksMap[folderName] = [];
            return getBookmarksContent(value.children, bookmarksMap, folderName);
        }
        if (value.type == "bookmark") {
            const bookmarkItem = {title: value.title, url: value.url};
            const folderName = folder != undefined ? folder : 'Folder';
            const bookmarksList = bookmarksMap[folderName];
            if (bookmarksList != undefined) {
                bookmarksList.push(bookmarkItem);
                bookmarksMap[folderName] = bookmarksList;
            }
        }
    })
    return bookmarksMap;
}