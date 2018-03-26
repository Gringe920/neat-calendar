
const bourbon = require('node-bourbon').includePaths;
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.WEBPACK_ENV === 'prod';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src', 'bundle'),
        filename: '[name].bundle.js',
        publicPath: 'bundle'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?includePaths[]=' + bourbon]
            },
            {
                test:/\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            url_prefix: isProd ? '""' : '"https://cors-anywhere.herokuapp.com/"'
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'src/bundle/*')]),
        // new HtmlWebpackPlugin({
        //     title: 'neat-calendar',
        //     filename: '../index.html'
        // }),
    ],
    resolve:{
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        historyApiFallback: {
            index: 'src/index.html'
        },
    }
};

if(isProd){
    config.devtool = '#source-map';
}

export default config;