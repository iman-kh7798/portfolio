const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '';

const config = {
    entry: './src/client/client.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        publicPath: ASSET_PATH,
    },
    plugins: [
        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join(__dirname, 'public', 'vendor-manifest.json')
        }),
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 3000,
        //     server: { baseDir: ['public'] }
        // }),
    ],
};

module.exports = merge([baseConfig, config]);
