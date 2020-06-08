// 调用栈
// 什么是调用栈
// JS引擎在调用一个函数前
// 需要把函数所在的环境push到一个数组里
// 这个数组叫做调用栈
// 等函数执行完了 就会把环境弹(pop)出来
// 然后return 到之前的环境 继续执行后续代码

// 递归函数
// 阶乘
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6 
// function f(n){
//     return n !== 1 ? n * f(n-1) : 1
// }
// 理解递归
// f(4)
// = 4 * f(3)
// = 4 * (3 * f(2))
// = 4 * (3 * (2 * f(1)))
// = 4 * (3 * (2 * (1)))
// = 4 * (3 * (2))
// = 4 * (6)
// 24
// 先递进 再回归

// 递归函数的调用栈
// 调用栈最长有多少
// function computeMaxCallStackSize(){
//     try{
//         return 1 + computeMaxCallStackSize()
//     }catch(e){
//         //报错说明栈溢出了
//         return 1
//     }
// }
// Chrome 12578
// Firefox 26773
// Node 12536

// 爆栈 如果调用栈中压入的帧过多 程序就会崩溃

// 函数提升
// 什么是函数提升
// function fn(){}
// 不管你把具名函数声明在哪里 它都会跑到第一行
// add(1,2)
// function add(x,y){
//     return x + y
// }

// let add = 1
// function add(){}
// //报错

// var add = 1
// function add(){}
// //add是1 不是函数

// 什么不是函数提升
// let fn = function(){}
// 这是赋值 右边的匿名函数声明不会提升
// add(1,2)
// let add = function(x,y){return x + y}
// //报错