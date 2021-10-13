'use strict';
const path = require('path');

module.exports = {
    devtool: false,
    mode: 'production',
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.css',
        ]
    },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 80
    }
};
