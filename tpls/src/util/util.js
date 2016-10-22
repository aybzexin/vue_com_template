import iScroll from '../common/js/iscroll.js'


export default  {
    hasLocalStorage : function () {
        if (('localStorage' in window) && window['localStorage'] !== null)
            return true;
        else
            return false;
    },

    isDemo : function () {
        return false;
    },

    LocalStorage : function (key, value) {
        if (this.hasLocalStorage()) {
            if (!value) {
                if (key) {
                    var result = localStorage.getItem(key) === '' ? '' : JSON.parse(localStorage.getItem(key));
                    return result;
                } else {
                    return null;
                }

            } else {
                if (key) {
                    localStorage.setItem(key, JSON.stringify(value));
                }

            }
        }
    },
    isWeiXin : function () {
        var ua = navigator.userAgent,
            isWx = ua.indexOf("MicroMessenger") >= 0;
        return isWx;
    },

    removeLocalStorage : function (key) {
        if (this.hasLocalStorage()) {
            localStorage.removeItem(key);
        }
    },
    removeSessionStorage : function (key) {
        sessionStorage.removeItem(key);
    },
    sessionStorage : function (key, value) {
        if (!value) {
            if (key) {
                var result = JSON.parse(sessionStorage.getItem(key));
            }

            return result;
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    },
    isScroll : function (id) {
        var aScroll = new iScroll.iScroll(id, {
            onBeforeScrollStart: function (e) {
                var ele = e.target.tagName.toLowerCase();
                if (ele != 'input' && ele != 'textarea' && ele != 'select') {
                    e.preventDefault();
                }
            },
            checkDOMChanges: true,
            fadeScrollbar: true,
            vScrollbar: false,
            bounce: true
        });
        return aScroll;
    },
    getUrlArgs : function () {
        var theRequest = {};
        var url = decodeURIComponent(location.search);
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    getVueUrl : function (key,url) {
        var theRequest = {};
        if(!url){
            url = decodeURIComponent(url);
            url = location.hash.replace(/^#!?/, '')+(location.search && location.hash.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search);
        }
        url = decodeURIComponent(url);
        url = url.substring(url.indexOf('?'),url.length);
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            if(str.indexOf("?")>-1){
               str = str.replace("?","");
            }
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest[key];
    },
    getAbsoluteUrl : function (url) {
        var a;
        if (!a) a = document.createElement('a');
        a.href = url;
        return a.href;
    },

    getQueryString : function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.hash.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },

    formatVisitDate : function (startTime,isNoVisit) {
        var da1 = startTime * 1000;
        var da = new Date(da1);
        var year = da.getFullYear();
        var mon = da.getMonth() + 1;
        var day = da.getDate();
        var xinqi = da.getDay();//星期几
        var hour = da.getHours();
        var minute = da.getMinutes();
        if (minute == '0') {
            minute = '00';
        }
        if (xinqi == 0) {
            xinqi = '日'
        } else if (xinqi == 1) {
            xinqi = '一'
        } else if (xinqi == 2) {
            xinqi = '二'
        } else if (xinqi == 3) {
            xinqi = '三'
        } else if (xinqi == 4) {
            xinqi = '四'
        } else if (xinqi == 5) {
            xinqi = '五'
        } else {
            xinqi = '六'
        }
        var dateY;
        if(isNoVisit){
            dateY = year + '年' + mon + "月" + day + "日" + '(周' + xinqi + ')' + "&nbsp;" + hour + ':' + minute ;
        }else {
            dateY = year + '年' + mon + "月" + day + "日" + '(周' + xinqi + ')' + "&nbsp;" + hour + ':' + minute + '上门';
        }

        return dateY;
    },

    getDeviceType : function() {
        var u = navigator.userAgent;
        return {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1,
            iPad: u.indexOf('iPad') > -1
        }
    },
    urlEncode : function (param, key, encode) {
        if(param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' :'[' + i + ']');
                paramStr += util.urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    },

    isWeiXin : function (){
        return navigator.userAgent.indexOf("MicroMessenger")>=0;
    },

    serviceRoute : function (key){
        var path = key.path;
        var url = "";
        if( key.parameters){
            url = key.parameters.url;
        }
        if(url){
            var reg=new RegExp("\/[a-z_0-9]*\.html","gim");
            var currentUrl=url.replace(reg,'/6.4$&');
            var city = util.LocalStorage("select_city")  || window.env.defaultCity;
            var orgin = util.LocalStorage("origin");
            if(orgin === "Sogou"){
                currentUrl = currentUrl +"?city="+city.pinyin + "&origin="+orgin;

            }else{
                currentUrl = currentUrl +"?city="+city.pinyin;
            }

        }
        var route={
            homePage:"#!/index",
            myAyi  :"#!/index",
            rcbj:"/#!/baojie/set_addr",
            gx:"#!/index",
            zz:"#!/index",
            category:"/#!/allitem",
            wap:currentUrl,
            marketWap:currentUrl,
            orderListCurrent:"#!/index",
            orderListHistory:"#!/index",
            orderDetail:"#!/index",
            advancePay:"#!/index",
            orderPay:"#!/index",
            recharge:"#!/member",
            rechargePush:"#!/index",
            personalCenter:"#!/mine",
            feedback:"#!/index",
            giftExchange:"#!/order",
            balance:"#!/index",
            couponList:"#!/index",
            login:"#!/index",
            market:"#!/shop",
            "rechargeZF" : "/common/recharge_zhifu.html"
        }
        return route[path];
    },
    localRouter:function(key,param){
        var route={
            order:"/#!/order",
            member  :"/#!/member",
            index:"/#!/index",
            mine:"/#!/mine",
            city:"/#!/city",
            shop:"/#!/shop",
            goodsOrder:"/#!/goodsOrder",
            allitem:"/#!/allitem",
            login:"/#!/login",
            baojie_set_addr:"/#!/baojie/set_addr",
            baojie_order_time:"/#!/baojie/order_time",
            zengzhi_set_addr:"/#!/zengzhi/set_addr",
            zengzhi_order_time:"/#!/zengzhi/order_time",
            order_sure:"/#!/common/order_sure",
            pay_order:"/#!/common/pay_order",
            order_detail:"/#!/order_detail",
        }
        var url =  route[key];
        var count = 0;
        if(typeof param ==="object"){
            for(var i in param){
                if(url.indexOf("?")>-1){
                    url = url +"&"+ i + "="+param[i];
                }else{
                    if(count === 0){
                        url = url +"?"+ i + "="+param[i];
                    }else{
                        url = url +"&"+ i + "="+param[i];
                    }
                }
                count ++;

            }

        }
        return url;
    },

}




