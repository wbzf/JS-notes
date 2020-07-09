// JSX
// X表示扩展 所以JSX就是JS扩展版

// Vue有vue-loader
// .vue文件里写<template><script><style>
// 通过vue-loader变成一个构造选项

// React有JSX
// 把<button onClick="add">+1</button>
// 变成React.createElement('button',{onClick...},'+1')

// 使用JSX
// 方法一:CDN
// 把<script>改成<script type="text/babel">
// babel会自动进行转译
// 这种方式不支持src
// demo5

// 不要在生产环境使用方法一 因为效率太低
// 它要下载一个babel.min.js 
// 还要在浏览器端把JSX翻译成JS

// 方法二: webpack+babel+loader 
// 跳过

// 方法三: 使用create-react-app 
// 跟@vue/cli用法类似
// 全局安装yarn global add create-react-app
// 初始化目录create-react-app react-demo-1
// 进入目录 cd react-demo-1
// 开始开发yarn start
// 看看App.js 是不是默认就使用了jsx语法
// 因为webpack让JS默认走babel-loader
// demo6

// 使用JSX注意事项
// 注意className
// <div className="red">n</div>
// 被转译为
// React.createElement('div',{className:'red'},"n")

// 插入变量
// 标签里面的所有JS代码都要用{}包起来
// 如果你需要变量 就用{}把n包起来
// 如果你需要对象 就用{}把对象包起来 如{{name:'nihui'}}

// 习惯return后面加()

// 条件判断与循环控制

// 条件判断 
// 在Vue里
// <template>
//     <div>
//         <div v-if="n%2===0">n是偶数</div>
//         <span v-else>n是奇数</span>
//     </div>
// </template>

// 在React里
// const Component = () => {
//     return n%2===0 ? <div>n是偶数</div>:<span>n是奇数</span>
// }
// // 如果需要外面的div 可以写成
// const Component = () => {
//     return (
//         <div>
//             {n%2===0 ? <div>n是偶数</div> : <span>n是奇数</span>}
//         </div>
//     )
// }
// // 还可以写成
// const Component = () => {
//     const content = (
//         <div>
//             {n%2===0 ? <div>n是偶数</div> : <span>n是奇数</span>}
//         </div>
//     )
//     return content
// }
// // 还可以写成
// const Component = () => {
//     const inner = n%2===0 ? <div>n是偶数</div> : <span>n是奇数</span>
//     const content = (
//         <div>
//             {inner}
//         </div>
//     )
// }
// // 还可以写成
// const Component = () => {
//     let inner
//     if(n%2===0){
//         inner = <div>n是偶数</div>
//     }else{
//         inner = <span>n是奇数</span>
//     }
//     const content = (
//         <div>
//             {inner}
//         </div>
//     )
//     return content
// }

// 在Vue里
// 只能用Vue提供的语法写条件判断
// 在React里
// 你想怎么写就怎么写 你就是在写JS而已

// 循环语句
// 在Vue里可以遍历数组和对象
// <template>
//     <div>
//         <div v-for="(n,index) in numbers" :key="index">
//             下标{{index}} 值为{{n}}
//         </div>
//     </div>
// </template>

// 在React里
// const Component = (props) => {
//     return props.numbers.map((n,index)=>{
//     return <div>下标{index}值为{n}</div>
//     })
// }
// // 如果你需要外面的div 可以写成
// const Component = (props) => {
//     return (
//         <div>
//             {
//                 props.numbers.map((n,index)=>{
//                 return <div>下标{index}值为{n}</div>
//                 })
//             }
//         </div>
//     )
// }
// // 还可以这样写
// const Component = (props) => {
//     const array = []
//     for(let i = 0; i < props.numbers.length; i++){
//         array.push(<div>下标{i}值为{props.numbers[i]}</div>)
//     }
//     return <div>{array}</div>
// }
// demo7
