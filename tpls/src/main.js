import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRoute from './route.js'
import VueTap from './libs/touch.js'

Vue.use(VueTap);

// //require css
require('./common/css/style.css');
import util from './util/util.js'
import aybAjax from './util/ajax.js'
import serviceRoute from './util/serviceRoute.js'



window.util = util;
window.aybAjax = aybAjax;
window.serviceRoute = serviceRoute;
Vue.use(VueRouter)
var App = Vue.extend(require('./App.vue'))
var router = new VueRouter();
ConfigRoute(router);
router.start(App, '#app');

if(window.env.isDemo){
    require("./util/vconsole.min.js");
};



