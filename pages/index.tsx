import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import {getBookmarksData} from "../lib/utils";
import Bookmark from '../components/bookmark';

export default function Home({bookmarksData}: {bookmarksData: any}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.folderCollection}>
                {Object.keys(bookmarksData).map((key) =>
                    <Bookmark folder={key} bookmarkItems={bookmarksData[key]}></Bookmark>
                )}
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const bookmarksData = getBookmarksData();

    return {
        props: {
           bookmarksData,
        }
    }
}