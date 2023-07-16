module.exports = {
    entry: {
       index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules:[{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}