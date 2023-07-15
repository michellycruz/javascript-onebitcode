const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    output: {
        path:path.resolve(__dirname, 'public') 
    }
}