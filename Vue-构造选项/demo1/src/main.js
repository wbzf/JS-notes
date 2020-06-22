// import Vue from 'vue'
const Vue = window.Vue

Vue.config.productionTip = false

import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'
// new Vue({
//   el:'#透药娘',
//   render: h => h(Demo)
// })

// new Vue({
//   render: h => h(Demo)
// }).$mount('#透药娘')

// new Vue({
//   // data:{
//   //   n:0
//   // },
//   data: function () {
//     return {
//       n: 0,
//       array: [1,2,3,4,5,6,7,8]
//     }
//   },
//   template:`
//   <div class="red">
//   {{n}}
//   <button @click="add">+1</button>
//   <hr>
//   {{filterArray()}}
//   </div>
//   `,
//   methods:{
//     add(){
//       this.n += 1
//     },
//     filterArray(){
//       console.log('我透了药娘')
//       return this.array.filter(i => i % 2 === 0)
//     }
//   }
// }).$mount('#透药娘')

// Vue.component('xxx',{
//   template:`
//     <div>我要透伪娘</div>
//   `
// })

//组件 文件名小写 组件名大写
// new Vue({
//   components:{
//     Mtf:Demo
//   },
//   data: function () {
//     return {
//       n: 0,
//       array: [1,2,3,4,5,6,7,8]
//     }
//   },
//   template:`
//   <div class="red">
//   {{n}}
//   <button @click="add">+1</button>
//   <Mtf/>
//   <xxx/>
//   <hr>
//   {{filterArray()}}
//   </div>
//   `,
//   methods:{
//     add(){
//       this.n += 1
//     },
//     filterArray(){
//       console.log('我透了药娘')
//       return this.array.filter(i => i % 2 === 0)
//     }
//   }
// }).$mount('#透药娘')


//钩子
// new Vue({
//   data() {
//     return {
//       n: 0
//     }
//   },
//   template:`
//   <div class="red">
//   {{n}}
//   <button @click="add">+1</button>
//   </div>
//   `,
//   created(){
//     // debugger
//     console.log('药娘出现在内存中')
//   },
//   mounted(){
//     console.log('药娘出现在页面中')
//   },
//   updated(){
//     console.log('药娘更新了')
//     console.log(this.n)
//   },
//   methods:{
//     add(){
//       this.n += 1
//     }
//   }
// }).$mount('#透药娘')

//测试destory()
// new Vue({
//   components:{Demo},
//   data:{
//     visible:true
//   },
//   template:`
//     <div>
//     <button @click = "toggle">让药娘消失</button>
//     <hr>
//     <Demo v-if="visible === true"/>
//     </div>
//   `,
//   methods:{
//     toggle(){
//       this.visible = !this.visible
//     }
//   }
// }).$mount('#透药娘')

//props
new Vue({
  components:{Demo2},
  data:{
    visible:true,
    n:0
  },
  // 传变量前面加:
  template:`
    <div>
      {{n}}
      <Demo2 message="这个是外面的药娘"/>
      <!--<Demo2 :message="n"/>-->
      <Demo2 :message="n" :fn="add"/>
    </div>
  `,
  methods:{
    toggle(){
      this.visible = !this.visible
    },
    add(){
      this.n += 1
    }
  }
}).$mount('#透药娘')