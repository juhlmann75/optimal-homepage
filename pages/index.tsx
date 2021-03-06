import Layout, { siteTitle } from '../components/layout'
import React from "react";
import Folders from "../components/folders";
import TopNavbar from "../components/topNavbar";
import CurrentDate from "../components/currentDate";

export default function Home() {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Layout home>
                <div className="flex items-center justify-center m-4">
                    <CurrentDate></CurrentDate>
                </div>
                <Folders></Folders>
            </Layout>
        </div>
    )
}