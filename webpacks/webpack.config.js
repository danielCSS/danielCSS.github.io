// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('styles.css');
const extractCSS = new ExtractTextPlugin('styles.css');//[name].bundle.css');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  devtool : 'source-map',
  entry: {
    index: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.scss$/,
      use: [
        'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
      ],
      include: /(\/components)/
    },
    {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader','postcss-loader','sass-loader']),
      include: /(\/core-scss)/
    },
    {
      test: /\.(js|jsx)$/,
      use : {
        loader : 'babel-loader',
        options : {
          presets : ['react','es2015']
        }
      }
    }]

  },
  plugins: [
    extractCSS,
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
       }
    }),
    new BrowserSyncPlugin(
        {
            host: 'localhost',
            port: 7000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            //proxy: 'http://localhost:8100/',
            server: { baseDir: ['./'] }
        }
        // plugin options
        // {
        //   // prevent BrowserSync from reloading the page
        //   // and let Webpack Dev Server take care of this
        //   reload: false
        // }
    )
  ]
}

module.exports = config
