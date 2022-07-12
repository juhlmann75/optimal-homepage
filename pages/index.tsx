import Layout, { siteTitle } from '../components/layout'
import React from "react";
import {saveBookmarksFile} from "../lib/utils";
import Folders from "../components/folders";

export default function Home() {
    return (
        <Layout home>
            <div className="container text-center mt-6">
                <input id={"bookmarksFile"} type={"file"} accept={"text/html"} onChange={saveBookmarksFile}/>
            </div>
            <Folders></Folders>
        </Layout>
    )
}