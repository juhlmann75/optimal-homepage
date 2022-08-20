import Dexie, { Table } from 'dexie';
import {Folder} from "./folder";
import {BookmarkItem} from "./bookmarkItem";

export class BookmarksDB extends Dexie {

    bookmarks!: Table<BookmarkItem, number>;
    folders!: Table<Folder, number>;

    constructor() {
        super('bookmarksDB');
        this.version(1).stores({
            folders: '++id',
            bookmarks: '++id, folderId'
        });
    }
}

export const bookmarksDB = new BookmarksDB();