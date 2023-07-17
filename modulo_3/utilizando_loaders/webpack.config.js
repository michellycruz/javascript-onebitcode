const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
       index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules:[{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}