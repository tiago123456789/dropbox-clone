var path = require('path');
var webpack = require('webpack');
require("dotenv").config();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.ENVIRONMENT),
            firebase_apiKey: JSON.stringify(process.env.firebase_apiKey),
            firebase_authDomain: JSON.stringify(process.env.firebase_authDomain),
            firebase_databaseURL: JSON.stringify(process.env.firebase_databaseURL),
            firebase_projectId: JSON.stringify(process.env.firebase_projectId),
            firebase_storageBucket: JSON.stringify(process.env.firebase_storageBucket),
            firebase_messagingSenderId: JSON.stringify(process.env.firebase_messagingSenderId),
            firebase_appId: JSON.stringify(process.env.firebase_appId),
            firebase_measurementId: JSON.stringify(process.env.firebase_measurementId)
        })
    ],
};