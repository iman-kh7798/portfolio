import React from "react";
import App from "./components/App";
import Index from './components/rootPath'
export default [
    {
        ...App,
        routes:
        [
            {
                ...Index,
                path:'/',
                exact:true
            }
        ]
    }
]