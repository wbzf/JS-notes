import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

let id = 0
const createUser = (name, gender) => {
  id += 1
  return { id: id, name: name, gender: gender }
}
new Vue({
  data() {
    return {
      users: [
        createUser("伪娘1", "男"),
        createUser("药娘1", "女"),
        createUser("伪娘2", "男"),
        createUser("药娘2", "女")
      ],
      gender: '',
      // displayUsers: []
    }
  },
  // 如何给这三个按钮加事假处理函数
  // 1.点击之后改users
  // 2.使用computed
  // created() {
  //   this.displayUsers = this.users
  // },
  methods: {
    // weiniang() {
    //   this.displayUsers = this.users.filter(u => u.gender === "男")
    // },
    // yaoniang() {
    //   this.displayUsers = this.users.filter(u => u.gender === "女")
    // },
    // all() {
    //   this.displayUsers = this.users
    // }
    // weiniang() {
    //   this.gender = '男'
    // },
    // yaoniang() {
    //   this.gender = '女'
    // },
    // all() {
    //   this.gender = ''
    // }
  },
  computed: {
    displayUsers() {
      console.log('我透了一次药娘')
      const { users, gender } = this
      if (gender === '') {
        return this.users
      } else if (gender === '男') {
        return this.users.filter(u => u.gender === '男')
      } else {
        return this.users.filter(u => u.gender === '女')
      }
    }
  },
  template: `
    <div>
      <div><button @click="gender = ''">全部</button>
      <button @click="gender = '男'">男</button>
      <button @click="gender = '女'">女</button></div>
      <ul>
        <li v-for="(u,index) in displayUsers" :key="index">
          {{u.name}} - {{u.gender}}
        </li>
      </ul>
    </div>
  `
}).$mount('#app')
