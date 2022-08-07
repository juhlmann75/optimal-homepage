import Layout, { siteTitle } from '../components/layout'
import React from "react";
import Folders from "../components/folders";
import TopNavbar from "../components/topNavbar";
import CurrentDate from "../components/currentDate";
import Search from "../components/search";
import Quote, {QuoteData} from "../components/quote";

export default function Home({ data }: {data: QuoteData[]}) {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Layout home>
                <div className="flex items-center justify-center m-4">
                    <CurrentDate></CurrentDate>
                </div>
                <Quote data={data}></Quote>
                <Search></Search>
                <Folders></Folders>
            </Layout>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://zenquotes.io/api/today`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}