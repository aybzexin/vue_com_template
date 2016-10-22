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
config.output.filename = 'vuecommon/js/[name].[chunkhash:8].js'
config.output.chunkFilename = 'vuecommon/js/[name].[chunkhash:8].js'


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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vuecommon/js/vendor-[chunkhash:8].js'),
    new webpack.optimize.CommonsChunkPlugin(
            {
                name : 'app',
                children : true,
                minChunks : 2,//提取公共模块
            }
    ),
    new ExtractTextPlugin('vuecommon/css/[name].[contenthash].css'),
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
                baseDomain : "ayibang.com",
                baseDomainHttps : "details.ayibang.com",
                ucUrl      : "https://uc.ayibang.com/",
                oauthUrl   : "https://oauth.ayibang.com/",
                wapUrl     : "http://api.wap.ayibang.cn/v1/",
                custUrl    : "https://api-cust.ayibang.com/v1/",
                custUrlTwo    : "https://api-cust.ayibang.com/v2/",
                custUrlThree  : "https://api-cust.ayibang.com/v3/",
                webAppNanny : "https://api-nanny.ayibang.com",
                custUrlFour : "https://api-cust.ayibang.com/v4/",
                custUrlZengZhi : "http://detail.ayibang.com/6.4/",
                hex         : "08fe2621d8e716b02ec0da35256a998d",
                wapClientid : "MhXzkHlBrySjHhRhl",
                wapClientsecret : "3N5X43NC",
                defaultCity : {name:"北京",pinyin:"beijing"},
                activityImgUrl:"http://activity.ayibang.com/2016/memberapp/?city=",
                goodsScode :"AYB_GOODS",
                isDemo : false,
	            isConsoleAjax:false

            }
        }
    })

]);


module.exports = config
