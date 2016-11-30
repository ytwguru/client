require('dotenv').config({silent: true});

const routes = require("./src/routes.json").map((route) => route.path);
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractCSS = new ExtractTextPlugin('[name].min.css', {
  allChunks: false
});
const ExtractJS = new ExtractTextPlugin('[name].min.js');
const S3Plugin = require("webpack-s3-plugin");
const isDebug = process.env.DEVELOPMENT === "true";
const isDeploy = process.env.DEPLOY === "true";

let config  = {
  devtool: isDebug ? 'source-map' : false,
  debug: isDebug,
  entry: {
    main: [
      path.resolve(__dirname, './src/index.js')
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    chunkFileName: '[id].chunk.js'
  },
  module: {
    exprContextCritical: false,
    loaders: [
      { test: /\.jsx?$/, exclude : /(node_modules)/, loaders: ['babel']},
      { test: /\.json?$/, loader: 'json'},
      { test : /\.css$/, loader: ExtractCSS.extract("style", "css")},
      { test : /\.less$/, loader: ExtractCSS.extract("style", "css!less")},
      { test: /\.ejs$/, loader: 'ejs?variable=data' },
      { test: /\.(woff|woff2)(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.eot(\?.+)?$/, loader: 'file'},
      { test: /\.svg(\?.+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.png$/, loader: 'url?mimetype=image/png'},
      { test: /\.gif$/, loader: 'url?mimetype=image/gif'},
      { test: /\.jpe?g$/, loader: 'url?mimetype=image/jpeg'},
      { test: /\.(svg)$/, loader: 'url?limit=10000' },
      { test: /\.(wav|mp3)$/, loader: 'file' },
      { test: /\.modernizrrc$/, loader: "modernizr" },
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
      'src/pages',
      'node_modules'
    ],
    alias: {
      modernizr$: ".modernizrrc",
      masonry : "masonry-layout",
      isotope: 'isotope-layout',
      respond: 'respond.js/src/respond',
      "jquery.stellar" : "jquery.stellar/jquery.stellar"
    },
    extensions: ['', '.js', '.jsx', '.json', ".less", ".css"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new StaticSiteGeneratorPlugin('main', routes),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    ExtractCSS,
    new webpack.DefinePlugin({
      'process.env': {
        DEVELOPMENT: JSON.stringify(process.env.DEVELOPMENT),
        DEVTOOLS: JSON.stringify(process.env.DEVTOOLS),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEPLOY: JSON.stringify(process.env.DEPLOY),
        GA_TRACKER : JSON.stringify(process.env.GA_TRACKER),
        MIXPANEL_TRACKER : JSON.stringify(process.env.MIXPANEL_TRACKER),
        API_URL : JSON.stringify(process.env.API_URL)
      }
    })
  ]
};

if(isDeploy){
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
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
} else {
  config.plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['dist'] }
  }));
}

module.exports = config;