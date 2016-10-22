<template>
 <div>
    <group>
      <cell title="礼品卡兑换" v-on:click="show()"  is-link></cell>
    </group>

    <popup :show.sync='isshow' height="100%">
        <div class="popup">
            <x-header style="background-color:#00beaf" @on-click-back="hide()" :left-options="{showBack: true, preventGoBack : true}" >礼品卡兑换</x-header>
            <group>
                  <x-input   placeholder="I'm placeholder"></x-input>
                  <x-input   placeholder="I'm placeholder"></x-input>
            </group>
        </div>
    </popup>
  </div>
</template>
<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'
import Popup from 'vux/dist/components/popup'
import xHeader from 'vux/dist/components/x-header'
import xInput from 'vux/dist/components/x-input'

export default {
 data(){
   return {
     isshow : false
   }
 },
 methods : {
    show (){
      this.isshow = true
    },
    hide (){
      this.isshow = false
    }
 },
 components: {
    Group,
    Cell,
    xHeader,
    xInput,
    Popup
  }
}
</script>
<style>
.vux-popup-enter {
  -webkit-transform: translate3d(100%,0,0)!important;
  transform: translate3d(100%, 0, 0)!important;
}
.vux-popup-leave {
  -webkit-transform: translate3d(100%,0,0)!important;
  transform: translate3d(100%, 0, 0)!important;
}
</style>
