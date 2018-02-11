
const readDirSync = require('./src/cfg/get-bundle-name');
const bourbon = require('node-bourbon').includePaths;
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.WEBPACK_ENV === 'prod';

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src', 'bundle'),
        filename: '[name].bundle.[chunkhash:6].js',
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
            url_prefix: isProd ? '""' : '"https://cors-anywhere.herokuapp.com/"',
            bundleName: readDirSync(path.resolve(__dirname, 'src', 'bundle'))
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'src/bundle/*')])
    ],
    resolve:{
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        historyApiFallback: {
            index: 'src/index.html'
        }
    }
};