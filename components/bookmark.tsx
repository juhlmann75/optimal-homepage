import utilStyles from "../styles/utils.module.css";
import parse from "node-bookmarks-parser";
import {Bookmark} from "node-bookmarks-parser/build/interfaces/bookmark";

export default function bookmark({folder, bookmarkItems}: {folder:string, bookmarkItems:any}) {
    return (
      <div className={utilStyles.folder}>
          <h3>{folder}</h3>
          <ul className={utilStyles.list}>
              {bookmarkItems.map(({title, url}:{title:string, url:string}) =>
                <li key={url} className={utilStyles.listItem}><a href={url}>{title}</a></li>
              )}
          </ul>
      </div>
    );
}

export function getBookmarksData(bookmarksContent: any)  {
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
