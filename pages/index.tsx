import Layout, { siteTitle } from '../components/layout'
import React from "react";
import {saveBookmarksFile} from "../lib/utils";
import Folders from "../components/folders";
import BookmarksUpload from "../components/bookmarksUpload";
import ToggleButton from "../components/toggleButton";
import BookmarksUploadModal from "../components/bookmarksUploadModal";

export default function Home() {
    return (
        <Layout home>
            <ToggleButton></ToggleButton>
            <Folders></Folders>
        </Layout>
    )
}