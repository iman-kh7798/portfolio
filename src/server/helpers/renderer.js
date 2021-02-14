import React from "react";
import Routes from "../../includes/Routes";
import {StaticRouter} from "react-router-dom";
import {renderToString} from "react-dom/server";
//import {Provider} from 'react-redux'
import serialize from 'serialize-javascript'
import {renderRoutes} from 'react-router-config'
import {Helmet} from 'react-helmet'

export default (req, context) => {
    const content = renderToString(
        // <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
            {renderRoutes(Routes)}
        </StaticRouter>
        //  </Provider>
    )

    const helmet = Helmet.renderStatic();

    return`<html lang="fa">
                <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="/main.css">
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/bundle.js">
                    </script>
                </body>
            </html>`
}