import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import {getBookmarksDataFromFile} from "../lib/utils";
import Bookmark, {getBookmarksData} from '../components/bookmark';
import React from "react";

export default function Home() {
    const [bookmarks, setBookmarks]: [bookmarks: any, setBookmarks: any] = React.useState({});

    function getBookmarksFile() {
        let fileReader = new FileReader();
        let fileObject = document.getElementById('bookmarksFile') as HTMLInputElement | null;
        if (fileObject != null) {
            let file = fileObject.files;
            if (file != null && file.length > 0) {
                fileReader.readAsText(file[0]);
                fileReader.onload = (() => {
                    const bookmarksData = getBookmarksData(fileReader.result);
                    setBookmarks(bookmarksData);
                });
            }
        }
    }

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.menu}>
                <input id={"bookmarksFile"} type={"file"} accept={"text/html"} onChange={getBookmarksFile}/>
            </div>
            <div className={utilStyles.folderCollection}>
                {Object.keys(bookmarks).map((key) =>
                    <Bookmark key={key} folder={key} bookmarkItems={bookmarks[key]}></Bookmark>
                )}
            </div>
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const bookmarksData = getBookmarksDataFromFile();
//
//     return {
//         props: {
//            bookmarksData,
//         }
//     }
// }