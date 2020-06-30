// 模板template三种写法
// 1.Vue完整版 写在HTML里
// <div id = "xxx">
//     {{n}}
//     <button @click="add">+1</button>
// </div>

// new Vue({
//     el: '#xxx',
//     data:{n:0},
//     methods:{
//         add(){}
//     }
// })

// 2.Vue完整版 写在选项里
// <div id="app">

// </div>

// new Vue({
//     template:`
//         <div>
//             {{n}}
//             <button @click="add">+1</button>
//         </div>
//     `,
//     data:{n:0},
//     methods:{add(){this.n+=1}}
// }).$mount('#app')
// div#app会被替代

// 3.Vue非完整版 配合xxx.vue文件 template里不是html是xml
// <template>
//     <div>
//         {{n}}
//         <button @click="add">+1</button>
//     </div>
// </template>

// <script>
// export default{
//     data(){
//         return {n:0}
//     } //data必须为函数
//     methods:{
//         add(){
//             this.n += 1
//         }
//     }
// }
// </script>
// <style>这里写css</style>

// 然后在另外一个地方写下如下代码;
// import Xxx from "./xxx.vue";
// // Xxx是一个options对象
// new Vue({
//   render: (h) => h(Xxx),
// }).$mount("#app");

// 模板里有哪些语法;
// 我们把HTML模板叫做template;

// 展示内容
// 表达式
// {{Object.a}} 表达式
// {{n + 1}} 可以写任何运算
// {{ fn(n) }} 可以调用函数
// 如果值为undefined或null 就不显示
// 另一种写法为 <div v-text="表达式"></div>

// HTML内容
// 假设data.x值为 <strong>hi</strong>
// <div v-html="x"></div> 即可显示粗体的hi

// 我就想展示{{n}}
// <div v-pre>{{n}}</div>
// v-pre 不会对模板进行编译

// 绑定属性
// 绑定src
// <img v-bind:src="x" />

// v-bind:简写为:
// <img :src="x" />

// 绑定对象
// <div>
// :style="{border: '1px solid red', height:100}"
// </div>
// // 注意这里可以把'100px'写成100

// 绑定事件
// v-on:事件名
// <button v-on:click="add">+1</button>
// 点击之后 Vue会运行add()
// <button v-on:click="xxx(1)">xxx</button>
// 点击之后 Vue会运行xxx(1)
// <button v-on:click="n+=1">xxx</button>
// 点击之后 Vue会运行n+=1
// 即发现函数就加括号调用 否则就直接运行代码

// 缩写
// <button @click="add">+1</button>
// 正常人都用缩写

// 条件判断
// if...else
// <div v-if="x>0">
//     x大于0
// </div>
// <div v-else-if="x===0">
//     x为0
// </div>
// <div v-else>
//     x小于0
// </div>

// 循环
// for(value,key) in 对象或数组

// <ul>
//     <li v-for="(u,index) in users" :key="index">
//         索引: {{index}} 值: {{u.name}}
//     </li>
// </ul>

// <ul>
//     <li v-for="(value, name) in obj" :key="name">
//         属性名: {{name}} 属性值: {{value}}
//     </li>
// </ul>

// 显示 隐藏
// v-show
// <div v-show="n%2===0">n 是偶数</div>

// 近似等于
// <div :style="{display:n%2===0? 'block' : 'none'}">n 是偶数</div>
// 注意 看得见的元素display不只有block
// 如table的display为table
// 如li的display为list-item

// Vue模板主要特点有
// 使用XML语法
// 使用{{}}插入表达式
// 使用v-html v-on v-bind 等指令操作dom
// 使用v-if v-for等指令实现条件判断和循环
