const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,  //expressao reguar - regex
                use:[
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ss$/i,  
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugin: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]
}