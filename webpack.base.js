const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path=require('path')
const webpack=require('webpack')



module.exports = {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),


    ],

    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                use:[{
                    loader: "babel-loader",

                }],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules\/(?!(three)\/).*/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "/assets/images/[name].[ext]",
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "/assets/webfonts/[name].[ext]",
                    }
                },
            },
        ]
    }
};
