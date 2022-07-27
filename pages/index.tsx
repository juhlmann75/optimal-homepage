import Layout, { siteTitle } from '../components/layout'
import React from "react";
import {saveBookmarksFile} from "../lib/utils";
import Folders from "../components/folders";
import BookmarksUpload from "../components/bookmarksUpload";
import ToggleButton from "../components/toggleButton";
import BookmarksUploadModal from "../components/bookmarksUploadModal";
import Date from "../components/currentDate";
import CurrentDate from "../components/currentDate";

export default function Home() {
    const date = Date.toString();
    return (
        <Layout home>
            <CurrentDate></CurrentDate>
            <ToggleButton></ToggleButton>
            <Folders></Folders>
        </Layout>
    )
}