const webpack           = require('webpack');
const path              = require('path');
//const CleanPlugin       = require('clean-webpack-plugin');
//const autoprefixer      = require('autoprefixer');

const packageConfig     = require('./package.json');
const appEnv            = process.env.NODE_ENV || 'development';
const appPath           = path.join(__dirname, '');
//const testPath          = path.join(__dirname, 'test');
const distPath          = path.join(__dirname, 'dist');
const exclude           = /node_modules/;

const config = {

  // The base directory for resolving `entry` (must be absolute path)
  context: appPath,

  entry: {
    app: './index.js',
    //vendor: Object.keys(packageConfig.dependencies)
  },

  output: {
    // The bundling output directory (must be absolute path)
    path: distPath,
    // Set proper base URL for serving resources
    publicPath: '/',
    // The output filename of the entry chunk, relative to `path`
    // [name] - Will be set per each key name in `entry`
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    port: 8008
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      // Transpile ES6 and enable Hot Reload
      {
        test: /\.js$/,
        loaders: [
          'react-hot-loader',
          //'babel?cacheDirectory&plugins=babel-plugin-rewire'
        ],
        exclude: exclude
      },

      // SCSS
      // {
      //   test: /\.(css|scss)$/,
      //   loaders: [
      //     'style',
      //     'css?root=' + encodeURIComponent(appPath),
      //     'postcss',
      //     'sass?includePaths[]=' + encodeURIComponent(appPath)
      //   ]
      // },
    ]
  }

};

module.exports = config;
