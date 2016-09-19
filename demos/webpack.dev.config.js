const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    path.join(__dirname, 'src/index')
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
