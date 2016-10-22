<template>
        <x-header style="background-color:#f7f7fa"  :left-options="{showBack: false}" ><span style="color:#888">我的订单</span><a slot="right" style="color:#00beaf">历史订单</a></x-header>
        <scroller lock-x>
            <div class="box1">
              many many content
            </div>
        </scroller>
</template>
<script>
import xHeader from 'vux/dist/components/x-header'
import scroller from 'vux/dist/components/scroller'
export default {
  route: {
    data (){
        console.log(1)
    },
    activate: function (transition) {
      console.log('hook-example activated!')
      transition.next()
    },
    deactivate: function (transition) {
      console.log('hook-example deactivated!')
      transition.next()
    }
  },
 components: {
   xHeader,
   scroller
 }
}
</script>
