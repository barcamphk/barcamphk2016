var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './entry.js'
    },
    output: {
        path: (__dirname),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test:   /\.scss$/,
                loader:  ExtractTextPlugin.extract("style", "!css!postcss!sass")
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new ExtractTextPlugin("./css/style.css")
    ]
}
