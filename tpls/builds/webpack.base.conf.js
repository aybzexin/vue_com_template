var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pro = require('process');




var plugins = [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
        "$": "webpack_zepto"
    }),
];

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: pro.argv.splice(2)[0] === 'cdn' ? 'http://s1.ayibang.com/static/' : '',//cdn
    chunkFilename : '/vuecommon/js/[name].js',
    filename: '/vuecommon/js/[name].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        // loader :ExtractTextPlugin.extract('style-loader', 'css-loader'),
        loader :'style!css',
      },
      {
          test: /vux.src.*?js$/,
          loader: 'babel'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 100000,
          name: 'vuecommon/img/[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  vue : {

  },
    resolve: {
      extension: ['', '.js'],
      alias: {
        'vux-components': 'vux/src/components'
      }
    },
    plugins : plugins
}

