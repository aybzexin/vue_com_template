export default  {
        getCityList : function (){
            var  url =window.env.custUrlTwo + "city/lists";
            return url;
        },
        getHouseList : function (){

            var url = window.env.custUrl + "house/suggest";

            return url;
        },
        getBmSelect :function (){
            var url = window.env.webAppNanny + "/v1/config";
            return url;
        },
        getMainPage :function (){
            var url = window.env.custUrl +"conf/mainpage/get";
            return url;
        },
        cancelOrder :function (){
            var url = window.env.custUrl +"order/cancelConfirm";
            return url;
        },
        cancel :function (){
            var url = window.env.custUrl +"order/cancel";
            return url;
        },
        getSaveBMService:function (){
           var url = window.env.webAppNanny + '/v1/partner/reserve';
            return url;
        },
        rechargeList:function (){
           var url = window.env.custUrlTwo + 'plato/recharge';
            return url;
        },
        couponList:function (){
           var url = window.env.custUrl + 'coupon/lists';
            return url;
        },
        couponFetch : function(){
           var url = window.env.custUrl + 'coupon/fetch';
            return url;
        },
        access : function(){
             var url = window.env.oauthUrl + 'oauth2/access_token';
            return url;
        },
        vcode : function(){
             var url = window.env.ucUrl + 'vcode';
            return url;
        },
        getShopList:function(){
            var url = window.env.custUrl+"conf/goods/lists";
            return url;

        },
        getGoodInfo:function(){
            var url = window.env.custUrlFour+"scode/calcu";
            return url;
        },
        getCouponInfo:function(){
            var url = window.env.custUrl + "coupon/suggest";
            return url;
        },
        getCouponById:function (){
            var url = window.env.custUrl + "coupon/get";
            return url;

        },
        updateCustName:function (){
            var url = window.env.custUrl + "customer/updateName";
            return url;
        },
        putDSReserve:function (){
            var url = window.env.custUrl + "dianshang/reserve";
            return url;
        },
        getOrderList:function(){
            var url = window.env.custUrlThree + "order/listsall";
            return url;

        },
        postTakeOver:function(){
            var url = window.env.custUrl + "dianshang/takeover";
            return url;

        },
        getAllItem:function(){
            var url = window.env.custUrl + "scode/catelist";
            return url;
        },
        getOrderTimeList :function (){
            var url = window.env.custUrl + "resource/lists";
            return url;
        },
        getZengZhiTime:function (){
            var url = window.env.custUrl + "zengzhi/resource";
            return url;
        },
        postBJReserve:function (){
            var url = window.env.custUrl+"baojie/reserve";
            return url;
        },
        postZZReserve:function (){
            var url = window.env.custUrl+"zengzhi/reserve";
            return url;
        },
        postPayInfo:function(){
            var url = window.env.custUrl+"order/payInfo";
            return url;
        },
        getPayChannels:function(){
            var url = window.env.custUrlTwo+"conf/pay/channels";
            return url;
        },
        postPayAccout:function (){
            var url = window.env.custUrlTwo +"pay/ayb/payAccout";
            return url;
        },
        getVerifySign:function(){
            var url = window.env.custUrl + "pay/verify/sign";
            return url;
        },
        postWxSign:function(){
            var url = window.env.custUrl + "pay/wx/sign4h5";
            return url;
        },
        postZfbSign:function(){
            var url = window.env.custUrlTwo + "pay/zfb/sign4Wap";
            return url;
        },
        getOrderDetail:function (){
            var url = window.env.custUrlTwo + "order/detail";
            return url;
        },
        getAllPrices:function (){
            var url = window.env.custUrlThree + "scode/allPrices";
            return url;
        },
}
