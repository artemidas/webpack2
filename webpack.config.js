const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: 'build/'
    },
    module: {
      rules: [
        {
          test: /\.js$/, use: 'babel-loader'
        },
        {
          test: /\.css$/, use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 40000 }
            },
            'image-webpack-loader'
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('main.css')
    ]
}