//
// const path = require('path');
// const webpack = require('webpack');
// //const appPath = path.resolve(__dirname, './src'); //path.join(__dirname, '');
// const appPath = path.join(__dirname, 'src');
// //const packageConfig = require('./package.json');
// //const distPath = path.resolve(__dirname, './dist'); //path.join(__dirname, 'dist');
// const distPath = path.join(__dirname, 'dist');
// //const appEnv            = process.env.NODE_ENV || 'development';
// const exclude = /node_modules/;
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//
//   // The base directory for resolving `entry` (must be absolute path)
//   context: appPath,
//   entry: {
//     app: './app.js',
//   },
//
//   output: {
//     // The bundling output directory (must be absolute path)
//     path: distPath,
//     // Set proper base URL for serving resources
//     publicPath: '/',
//     // The output filename of the entry chunk, relative to `path`
//     // [name] - Will be set per each key name in `entry`
//     filename: '[name].bundle.js',
//   },
//   devServer: {
//     //inline:true,
//     port: 8008,
//     contentBase: appPath
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: [{
//           loader: 'babel-loader',
//           options: { presets: ['es2015'] },
//           exclude: exclude
//         }]
//       },
//
//       // Expose React as global object
//       {
//         test: require.resolve('react'),
//         loader: 'expose?React'
//       },
//       // {
//       //   //test: /\.(css|sass|scss)$/,
//       //   //use: ['style-loader', 'css-loader', 'sass-loader'],
//       //   test: /\.css$/, use: 'css-loader' //}
//       //   //use: ['style-loader', 'css-loader', 'sass-loader'],
//       // },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           use: "css-loader"
//         })
//       }
//
//       // Transpile ES6 and enable Hot Reload
//       // {
//       //   test: /\.js$/,
//       //   use: [
//       //     'react-hot-loader',
//       //     'babel-loader?cacheDirectory&plugins=babel-plugin-rewire'
//       //   ],
//       //   exclude: exclude
//       // },
//       //
//       // // SCSS
//       // {
//       //   test: /\.(css|scss)$/,
//       //   use: [
//       //     'style-loader',
//       //     'css-loader?root=' + encodeURIComponent(appPath),
//       //     'postcss-loader',
//       //     'sass-loader?includePaths[]=' + encodeURIComponent(appPath)
//       //   ]
//       // },
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin("main.css"),
//   ]
//
// };

// webpack.config.js
const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  }
}

module.exports = config
