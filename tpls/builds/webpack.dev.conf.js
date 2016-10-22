var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.base.conf')

// config.devtool = 'eval-source-map'

config.devServer = {
  historyApiFallback: true,
  noInfo: true,
}

config.plugins = (config.plugins || []).concat([

    new HtmlWebpackPlugin({
      template : require('html-webpack-template'),
      inject  :false,
      title:"阿姨帮",
      appMountId : 'app',
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
                activityImgUrl:"http://activity.demo.ayibang.com/2016/memberapp/?city=",
                defaultCity : {name:"大连",pinyin:"dalian"},
                goodsScode :"AYB_GOODS",
                isDemo : true,
	            isConsoleAjax:false

            }
        }
    })
]);


 module.exports = config
