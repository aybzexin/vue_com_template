<template>
  <div style="height:100%">
    <router-view></router-view>
    <tabbar>
        <tabbar-item v-for="v in tabbars" :link="v.path" :selected="current==v.path">
          <img slot="icon" :src="v.img">
          <span slot="label">{{v.title}}</span>
        </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbarItem from './components/tabbar.vue'
import Tabbar from 'vux/dist/components/tabbar'


export default {
  data () {
    return {
       tabbars : [
         {
           title :'阿姨帮',
           img   : 'https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png',
           path  : '/index',
         },
         {
           title :'订单',
           img   : 'https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png',
           path  : '/order',
         },
         {
           title :'会员',
           img   : 'https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png',
           path  : '/member',
         },
         {
           title :'我的',
           img   : 'https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png',
           path  : '/mine',
         },
       ],
       current : ''
    }
  },
  ready (){
         this.current = this.$route.path;
  },
  methods : {
      alert(type){
        this.select = type;
      }

  },
  components : {
    Tabbar,
    tabbarItem,
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  height:100%;
}
@import './static/css/vux.css';
</style>
