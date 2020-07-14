// 两种方式创建Class组件
// ES5方式(过时)

// import React, { Component } from 'react'
// const A = React.createClass({
//     render(){
//         return {
//             <div>nihui</div>
//         }
//     }
// })
// export default A
// // 由于ES5 不支持 class 才会有这种方式

// ES6方式

// import React from 'react'
// class B extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <div>nihui</div>
//         )
//     }
// }
// export default B

// 以后只用ES6的方式创建类组件

// Props外部数据

// 传入props给B组件
// class Parent extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {name: 'nihui'}
//     }
//     onClick = () => {}
//     render(){
//         return <B name={this.state.name} onClick={this.onClick}>hi</B>
//     }
// }
// // 外部数据被包装为一个对象
// // {name:'nihui', onClick:..., children:'hi'}
// // 此处的 onClick 是一个回调

// 初始化
// class B extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){}
// }
// 要么不初始化 即不写constructor
// 要么初始化 且必须写全套(不写super直接报错)

// 这么做了之后 this.props就是外部数据对象的地址了

// 读取
// class B extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return <div onClick={this.props.onClick}>
//             {this.props.name}
//             <div>{this.props.children}</div>
//         </div>
//     }
// }// 通过 this.props.xxx 读取

// 不准写props
// 改props的值(一个地址)
// this.props={/*另一个对象*/}
// 不要写这样的代码 没有意义
// 既然是外部数据 就应该由外部更新

// 改props的属性
// this.props.xxx = 'nihui'
// 不要写这样的代码 没有意义
// 既然是外部数据 就不应该从内部改值

// 原则
// 应该由数据的主人对数据进行更改

// 相关钩子
// componentWillReceiveProps钩子
// 当组件接受新的props 会触发此钩子
// demo1

// 该钩子已经被弃用
// 更名为UNSAFE_componentWillReceiveProps
// 总而言之 不要使用这个钩子
// 这个钩子是以前推荐使用的

// props作用
// 接受外部数据
// 只能读不能写

// 接受外部函数
// 在恰当的时机 调用该函数
// 该函数一般是父组件的函数

// State & setState 内部数据

// 初始化State
// class B extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             user:{name:'nihui',age:18}
//         }
//     }
//     render(){/* */}
// }

// 读写State
// 读用this.state
// this.state.xxx.yyy.zzz
// 写用this.setState(???,fn)
// this.setState(newState,fn)
// 注意setState不会立即改变this.state 会在当前代码
// 运行完后 再去更新this.state 从而触发UI更新
// this.setState((state,props)=>newState,fn)
// 这种方式的state反而更易于理解
// fn会在写入成功后执行
// demo2

// 写时会shallow merge 
// setState会自动将新state与旧state进行一级合并

// 不守规矩
// 修改this.state的属性值
// this.state.n += 1
// this.setState(this.state)
// 不推荐用 但能用(因为React没法阻止你这么写)

// 生命周期
// 类比如下代码

// let div = document.createElement('div')
// div.textContent = 'hi'
// // 这是div的create/construct过程
// document.body.appendChild(div)
// // 这是div的mount过程
// div.textContent = 'hi2'
// // 这是div的update过程
// div.remove()
// // 这是div的unmount过程

// 同理
// React组件也有这些过程 我们称之为生命周期











