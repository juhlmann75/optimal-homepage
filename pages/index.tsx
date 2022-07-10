import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import React from "react";
import {saveBookmarksFile} from "../lib/utils";
import Folders from "../components/folders";


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.menu}>
                <input id={"bookmarksFile"} type={"file"} accept={"text/html"} onChange={saveBookmarksFile}/>
            </div>
            <Folders></Folders>
        </Layout>
    )
}