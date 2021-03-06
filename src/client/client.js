
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "../includes/Routes";
import {BrowserRouter} from "react-router-dom";
//import {createStore,applyMiddleware} from "redux";
//import thunk from 'redux-thunk'
//import {Provider} from 'react-redux'
import {renderRoutes} from "react-router-config";
//import axios from "axios";
// const insaxios=axios.create({
//     baseURL:'/api'
// })
//const store= createStore(reducers,window.INITIAL_STATE,applyMiddleware(thunk.withExtraArgument(insaxios)))
ReactDOM.hydrate(
    // <Provider store={}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
   /* </Provider> */
    ,document.getElementById('root'));