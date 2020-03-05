const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    module:{
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/},
            { test: /\.css$/i, use: ['style-loader','css-loader']}
        ]
    }
}