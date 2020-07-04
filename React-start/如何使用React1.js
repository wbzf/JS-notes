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
