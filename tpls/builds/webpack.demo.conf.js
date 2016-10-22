var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpack =  require("clean-webpack-plugin");
var path = require("path");

//合并第三方
config.entry = {
    app :['./src/main.js'],
    vendor :['webpack_zepto','vue','vue-router'],
};
config.output.filename = 'vendor/js/[name].[chunkhash:8].js'
config.output.chunkFilename = 'vendor/js/[name].[chunkhash:8].js'
config.output.publicPath ='/';


SOURCE_MAP = false;
config.devtool = SOURCE_MAP ? 'source-map' : false

function generateExtractLoaders (loaders) {
    return loaders.map(function (loader) {
        return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
    }).join('!')
}

config.vue.loaders = {
    js: 'babel',
    // http://vuejs.github.io/vue-loader/configurations/extract-css.html
    css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
}

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new cleanWebpack(['dist'],{
        root : path.resolve(__dirname,"../"),
        verbose : true,
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor/js/vendor-[chunkhash:8].js'),
    new webpack.optimize.CommonsChunkPlugin(
            {
                name : 'app',
                children : true,
                minChunks : 2,//提取公共模块
            }
    ),
    new ExtractTextPlugin('vendor/css/[name].[contenthash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
        template : require('html-webpack-template'),
        inject  :false,
        appMountId : 'app',
        title:"阿姨帮",
        mobile: true,
        window: {
            env: {
                apiHost: 'http://myapi.com/api/v1',
                baseDomain : "demo.ayibang.com",
                baseDomainHttps : "details-demo.ayibang.com",
                ucUrl      : "https://ucdemo.ayibang.com/",
                oauthUrl   : "https://oauthdemo.ayibang.com/",
                wapUrl     : "http://api.wap.demo.ayibang.cn/v1/",
                custUrl    : "https://api-cust-demo.ayibang.com/v1/",
                custUrlTwo    : "https://api-cust-demo.ayibang.com/v2/",
                custUrlThree  : "https://api-cust-demo.ayibang.com/v3/",
                webAppNanny : "https://api-nanny-demo.ayibang.com",
                custUrlFour : "https://api-cust-demo.ayibang.com/v4/",
                custUrlZengZhi : "http://detail.demo.ayibang.com/6.4/",
                hex         : "fd1eb15b6be1860ad678604d90e2fc6d",
                wapClientid : "ayibangeucweb0812",
                wapClientsecret : "ayb888",
                defaultCity : {name:"大连",pinyin:"dalian"},
                activityImgUrl:"http://activity.demo.ayibang.com/2016/memberapp/?city=",
                goodsScode :"AYB_GOODS",
                isDemo : true,
	            isConsoleAjax:true

            }
        }
    })

]);


module.exports = config
