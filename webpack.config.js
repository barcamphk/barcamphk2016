var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

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
    resolve: {
      extensions: ['', '.js', '.css', '.scss'],
      alias: {
          'normalize': path.join(__dirname, '/node_modules/normalize.css')
      }
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new ExtractTextPlugin("./css/style.css")
    ]
}
