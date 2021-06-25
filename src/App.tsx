import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {ComparePhones} from "./components/ComparePhones/ComparePhones";

export const App: React.FC = () => {


    return (
        <>
            <Navbar/>
            <ComparePhones/>
        </>
    )
}