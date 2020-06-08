// 作用域 每个函数都会默认创建一个作用域

// function fn(){
//     let a = 1
// }
// console.log(a) //a不存在
// a的作用域在函数内部

// function fn(){
//     let a = 1
// }
// fn()
// console.log(a) //a还是不存在

// 全局变量VS局部变量
// 在顶级作用域声明的变量是全局变量
// let a = 1
// window.b = 2
// function fn(){
//     console.log(a,b)
// } 
// fn()
// window的属性是全局变量
// function f2(){
//     window.c = 2
//     let b = 3
// }
// f2()
// function f1(){
//     console.log(c)
//     console.log(b)
// }
// f1()
// window.Object
// window.parseInt
// 都是全局变量
// 其他都是局部变量

// 函数可嵌套 作用域也可嵌套
// function f1(){
//     let a = 1
//     function f2(){
//         let a = 2
//         console.log(a)
//     }
//     console.log(a)
//     a = 3
//     f2()
// }
// f1()

// 作用域规则
// 如果多个作用域有同名变量a
// 查找a的声明时 就向上取最近的作用域
// 简称就近原则
// 查找a的过程与函数执行无关 //静态作用域
// 但a的值与函数执行有关

// function f1(){
//     let a = 1
//     function f2(){
//         let a = 2
//         function f3(){
//             console.log(a)
//         }
//         a = 22
//         f3()
//     }
//     console.log(a)
//     a = 100
//     f2()
// }
// f1()
// 如果一个函数用到了外部的变量 那么这个函数加这个变量就叫做闭包
// a和f3组成了闭包