const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'build/bundle.js'
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
      new ExtractTextPlugin("build/main.css")
    ]
}