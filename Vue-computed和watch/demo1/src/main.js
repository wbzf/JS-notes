import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    user: {
      email: "yaoniang@qq.com",
      name: "qihai",
      phone: '123456789'
    }
  },
  // 不要重复
  // 不如用computed 来计算 displayName
  computed: {
    // displayName 可以是函数可以是对象
    // displayName() {
    //   return this.user.name || this.user.phone || this.user.email
    // }
    displayName: {
      get() {
        return this.user.name || this.user.email || this.user.phone
      },
      set(value) {
        this.user.name = value
      }
    }
  },
  template: `
  <div>
    <div>
      {{user.name || user.email || user.phone}} 
      {{user.name || user.email || user.phone}}
      {{user.name || user.email || user.phone}}
    </div>
    <div>
      {{displayName}}
      <button @click = "set">set</button>
    </div>
  </div>
  `,
  methods: {
    set() {
      this.displayName = "药娘"
    }
  }
}).$mount('#app')
