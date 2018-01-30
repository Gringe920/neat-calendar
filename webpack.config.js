
const path = require('path');

module.exports = {
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
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        historyApiFallback: {
            index: 'src/index.html'
        }
    }
};