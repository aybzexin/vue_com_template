module.exports = function(router){
   router.transitionOnLoad = true;
   router.map({
       '/order': {
           component: function(resolve){
                require.ensure([],function(require){
                  resolve(require('./page/order.vue'));
                },'order')
            }
       },
       '/member': {
           component: require('./page/member.vue')
       },
       '/index': {
           component: require('./page/index.vue')
       },
       '/mine': {
           component: require('./page/my.vue')
       },
     /* 404路由 */
        '*': {
               component: require('./page/index.vue')
        },
   })
}
