const routes = ['/', '/about/']
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve('./src/index.js')
  },
  output: {
    filename: 'package.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    modulesDirectories: [
      'src',
      'src/components',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', routes),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEVELOPMENT: JSON.stringify(process.env.DEVELOPMENT),
        DEVTOOLS: JSON.stringify(process.env.DEVTOOLS),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
