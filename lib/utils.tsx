import {db} from "../models/db";
import React from "react";
import parse from "node-bookmarks-parser";
import {Bookmark} from "node-bookmarks-parser/build/interfaces/bookmark";

interface BookmarksMap {
    [name: string]: {title?: string, url?: string, icon?: string}[]
}

export async function saveDataInIndexDB(data: BookmarksMap) {
    if (data) {
        if (db.bookmarks) db.bookmarks.clear();
        if (db.folders) db.folders.clear();
        return Object.keys(data).map(async (folderName) => {
            const bookmarksData = data[folderName];
            const folderId = await db.folders.add({name: folderName})
            bookmarksData.map(async ({title, url, icon}: { title?: string, url?: string, icon?: string }) => {
                await db.bookmarks.add({folderId: folderId, title: title, url: url, icon: icon});
            })
        });
    }
}

export function saveBookmarksFile() {
    let fileReader = new FileReader();
    let fileObject = document.getElementById('bookmarksFile') as HTMLInputElement | null;
    if (fileObject != null) {
        let file = fileObject.files;
        if (file != null && file.length > 0) {
            fileReader.readAsText(file[0]);
            fileReader.onload = (() => {
                const bookmarksData = getBookmarksData(fileReader.result);
                saveDataInIndexDB(bookmarksData).then(r => console.log("Success!"));
            });
        }
    }
}

export function getBookmarksData(bookmarksContent: string | ArrayBuffer | null)  {
    if (typeof bookmarksContent == 'string') {
        const bookmarksData = parse(bookmarksContent);

        return getBookmarksContent(bookmarksData, {}, '');
    }
    return {};
}

export function getBookmarksContent(bookmarks: Bookmark[] | undefined, bookmarksMap: BookmarksMap, folder: string | undefined) {
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
            const bookmarkItem = {title: value.title, url: value.url, icon: value.icon};
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