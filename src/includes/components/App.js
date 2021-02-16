import React from 'react';
import {renderRoutes} from "react-router-config";
import '../styles.css'




// import {fetchtUsers} from "../actions/actions";
const App=({route})=> {
        return (
                <>
                    {renderRoutes(route.routes)}
                </>
                )
    }

export default {
    component:App
}
