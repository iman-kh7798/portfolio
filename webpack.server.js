const path = require('path');
const {merge} = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const webpack=require('webpack')


const config = {
    target: "node",
    entry: './src/server/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
    },
    plugins:[
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join(__dirname, 'build', 'vendor-manifest.json')
        }),

    ],
    externals: [webpackNodeExternals()]
};

module.exports = merge([baseConfig, config]);

