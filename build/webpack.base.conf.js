'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
var glob = require('glob')
const vueLoaderConfig = require('./vue-loader.conf')
var entries = getEntry('./src/pages/**/*.js')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'common': resolve('src/assets/common'),
      'static': path.resolve(__dirname, '../static'),
    }
  },
  externals: {
    'vue': 'Vue',         //key为我们引入资源时对应的名字，冒号value为我们自己定义的名字和项目中要使用的名字，当然这两个名字可以一样，
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'jquery': '$',
    'axios': 'axios',
    'XLSX': 'XLSX'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {  //手动添加这一条，相当于是编译识别sass!
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
//获取入口js文件
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    pathname = basename.split("_")[0];
    entries[pathname] = entry;
  });
  return entries;
}
