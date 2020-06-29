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
