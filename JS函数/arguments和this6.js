// arguments和this
// 每个函数都有 除了箭头函数

// function fn(){
//     console.log(arguments)
//     console.log(this) //小写的window
//     //如果不给任何条件 this默认指向window
// }

// 如何传arguments
// 调用fn即可传arguments
// fn(1,2,3) arguemnts就是[1,2,3]的伪数组
// 用Array.from()转化为数组

// 如何传this
// 目前可以用fn.call(xxx,1,2,3)传this和arguments
// 而且xxx会被自动转化为对象
// fn.call(1) //1被自动封装成对象
// function fn(){
//     'use strict'
//     console.log(this)
// }
// //1 不会被自动封装成对象

// this是隐藏参数 arguments是普通参数

// 假设没有this
// let person = {
//     name: '药娘',
//     sayHi(){
//         console.log(`我要透` + person.name)
//     }
// }
// 分析
// 我们可以用直接保存了对象地址的变量获取'name'
// 我们把这种办法简称为引用

// 问题一
// let sayHi = function(){
//     console.log(`我要透` + person.name)
// }
// let person = {
//     name: '药娘',
//     'sayHi': sayHi
// }
// 分析
// person如果改名 sayHi函数就挂了
// sayHi函数甚至有可能在另一个文件里面
// 所以我们不希望sayHi函数里出现引用

// 问题二
// class Person{
//     constructor(name){
//         this.name = name //这里的this是new强制指定的 
//     }
//     sayHi(){
//         console.log(???) //要打印出person.name
//     }
// }
// 分析
// 这里只有类 还没创建对象 故不可能获取对象的引用
// 那么如何拿到对象的name

// 需要一种办法拿到对象 这样才能获取对象的name属性

// 一种办法 用参数
// 对象
// let person = {
//     name: '药娘',
//     sayHi(p){
//         console.log(`我要透` + p.name)
//     }
// }
// person.sayHi(person)
// 类
// class Person{
//     constructor(name){this.name = name}
//     sayHi(p){
//         console.log(`我要透` + p.name)
//     }
// }
// let p = new Person('药娘')
// p.sayHi(p)//this = p

// JS在每个函数里加了this
// 用this获取那个对象
// let person = {
//     name: '药娘', 
//     sayHi(){
//         console.log(`我要透` + this.name)
//     }
// }
// person.sayHi()
// 相当于
// person.sayHi(person)
// 然后person被传给了this了(person是个地址)
// 这样 每个函数都能用this获取一个未知对象的引用了

// person.sayHi()会隐式的把person作为this传给sayHi
// 方便sayHi获取person对应的对象

// 总结
// 我们想让函数获取对象的引用
// 但是并不想通过变量名做到
// JS通过额外的this做到:
// person.sayHi()会把person自动传给sayHi sayHi可以通过this引用person

// 两种调用
// 1.
// person.sayHi()
// 自动把person传到函数里 作为this
// 2.
// person.sayHi.call(person)
// 需要自己手动把person传到参数里 作为this
// let person = {
//     name: '药娘',
//     sayHi(){
//         console.log(this.name)
//     }
// }
// person.sayHi.call({name:1}) //1
