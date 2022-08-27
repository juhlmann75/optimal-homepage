import Layout, { siteTitle } from '../components/layout'
import React from "react";
import Folders from "../components/folders";
import TopNavbar from "../components/topNavbar";
import CurrentDate from "../components/currentDate";
import Search from "../components/search";
import Quote from "../components/quote";
import {TodoLists} from "../components/todoLists";
import {AddTodoList} from "../components/addTodoList";

export default function Home() {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Layout home>
                <div className="flex items-center justify-center m-4">
                    <CurrentDate></CurrentDate>
                </div>
                <div className="text-center">
                    <Quote></Quote>
                </div>
                <Search></Search>
                <TodoLists />
                <AddTodoList />
                <Folders></Folders>
            </Layout>
        </div>
    )
}