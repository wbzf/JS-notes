// import Vue from 'vue'

import Demo from './Demo.vue'
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(window.Vue)\

// new Vue({
//   el: '#app',
//   data:{
//     n:0
//   }
// })

// new Vue({
//   el:'#app',
//   render(createElement){
//     const h = createElement
//     return h('div', [this.n, h('button',{on:{click:this.add}},'+1')])
//   },
//   data:{
//     n:0
//   },
//   methods:{
//     add(){
//       this.n += 1
//     }
//   }
// })

new Vue({
  el:'#app',
  render(h){
    return h(Demo)
  }
})