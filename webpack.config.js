require('dotenv').config({silent: true});

const routes = require("./src/routes.json").map((route) => route.path);
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const S3Plugin = require("webpack-s3-plugin");

let config  = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: 'package.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve('./src'),
        loaders: ['babel']
      },
      {
        test: /\.json?$/,
        include: path.resolve('./src'),
        loaders: ['json']
      },
      {
        test : /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test : /\.less$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
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
    new ExtractTextPlugin('style.min.css'),
    new webpack.DefinePlugin({
      'process.env': {
        DEVELOPMENT: JSON.stringify(process.env.DEVELOPMENT),
        DEVTOOLS: JSON.stringify(process.env.DEVTOOLS),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

if(process.env.DEPLOY === "true"){
  config.plugins.push(
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.DEPLOY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.DEPLOY_AWS_SECRET_ACCESS_KEY,
        region: process.env.DEPLOY_AWS_REGION
      },
      s3UploadOptions: {
        Bucket: process.env.S3_BUCKET
      },
      cdnizerOptions: {
        defaultCDNBase: process.env.CDN_BASE
      }
    })
  );
}

module.exports = config;