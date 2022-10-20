const path = require('path');

module.exports = {
    mode: 'development',
    entry: './frontEnd/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|ts)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env"
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'eval-source-map'

}