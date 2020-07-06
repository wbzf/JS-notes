// 如何引入React;
// 函数的本质 - 延迟;
// JSX的用法;
// 条件判断和循环;

// 从CDN引入React
// 引入React: https://.../react.x.min.js
// 引入ReactDOM: https://...//react-dom.x.min.js
// demo1

// cjs和umd的区别
// cjs全程CommonJS 是Node.js支持的模块规范
// umd是统一模块定义 兼容各种模块规范(含浏览器)
// 理论上优先使用umd 同时支持Node.js和浏览器
// 最新的模块规范是使用import和export关键字

// 通过webpack引入React
// import ... from ...
// yarn add react react-dom
// import React from 'react'
// import ReactDom from 'react-dom'
// 需要配置webpack 不用

// 使用create-react-app 创建React
// yarn global add create-react-app
// create-react-app demo2

// 用React实现+1
// demo3
// 失败是因为App = React.creare 只执行了一次
// 如何让它重新执行 以获取n的最新值
// 函数可以获取最新值

// 6个6
// let i 
// for(i = 0; i < 6; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// 一秒钟后打印6个6 因为函数执行时遇到外部变量会去读取其最新值
// 正好上面的失败可以通过把App变为函数解决
// demo4

