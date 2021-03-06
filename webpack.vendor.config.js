const webpack = require('webpack');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        vendor: ['lodash', 'react', 'Three', 'jquery','react-dom']
    },
    output: {
        filename: 'vendor.bundle.js',
        path: path.join(__dirname, 'public'),
        library: 'vendor_lib'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_lib',
            path: path.join(__dirname, 'public', 'vendor-manifest.json')
        })
    ]
}



