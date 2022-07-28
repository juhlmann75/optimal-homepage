import Layout, { siteTitle } from '../components/layout'
import React from "react";
import Folders from "../components/folders";
import Navbar from "../components/topNavbar";
import TopNavbar from "../components/topNavbar";

export default function Home() {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Layout home>
                <Folders></Folders>
            </Layout>
        </div>
    )
}