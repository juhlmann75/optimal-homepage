import Layout, { siteTitle } from '../components/layout'
import React from "react";
import Folders from "../components/folders";
import TopNavbar from "../components/topNavbar";
import CurrentDate from "../components/currentDate";
import Search from "../components/search";
import Quote from "../components/quote";
import {TodoLists} from "../components/todoLists";
import {AddTodoList} from "../components/addTodoList";
import {useLiveQuery} from "dexie-react-hooks";
import {featureFlagsDB} from "../models/featureFlagsDB";

export default function Home() {
    const features = useLiveQuery(async () => featureFlagsDB.featureFlags.toArray());

    if (!features) {
        return null;
    }

    let quote = (
        <div className="text-center">
            <Quote></Quote>
        </div>
    );
    let search = <Search></Search>;
    let todoList = (
        <div>
            <TodoLists/>
            <AddTodoList/>
        </div>
    );
    let bookmarks = <Folders></Folders>;

    if (features.map((feature) => {
        if (feature.id == 1 && !feature.enabled) {
            bookmarks = <div></div>;
        }
        else if (feature.id == 2 && !feature.enabled) {
            quote = <div></div>;
        }
        else if (feature.id == 3 && !feature.enabled) {
            search = <div></div>;
        }
        else if (feature.id == 4 && !feature.enabled) {
            todoList = <div></div>;
        }
    }))

    return (
        <div>
            <TopNavbar></TopNavbar>
            <Layout home>
                <div className="flex items-center justify-center m-4">
                    <CurrentDate></CurrentDate>
                </div>
                {quote}
                {search}
                {todoList}
                {bookmarks}
            </Layout>
        </div>
    )
}