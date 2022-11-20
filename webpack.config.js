const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugin: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}