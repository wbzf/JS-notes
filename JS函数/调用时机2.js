// 函数的要素
// 每个函数都有这些东西
// 调用时机
// 作用域
// 闭包
// 形式参数
// 返回值
// 调用栈
// 函数提升
// arguments(除了箭头函数)
// this(除了箭头函数)

// 调用时机 时机不同 结果不同

// let a = 1
// function fn(){
//     console.log(a)
// }
// 打印出多少 //无 因为没有调用代码

// let a = 1
// function fn(){
//     console.log(a)
// }
// fn()
// 打印出1

// let a = 1
// function fn(){
//     console.log(a)
// }
// a = 2
// fn()
// 打印出2

// let a = 1
// function fn(){
//     console.log(a)
// }
// fn()
// a = 2
// 打印出1

// let a = 1
// function fn(){
//     setTimeout(()=>{
//         console.log(a)
//     },0)
// }
// fn()
// a = 2
// 打印出2

// let i = 0
// for(i = 0; i < 6; i++){
//     setTimeout(()=>{
//         console.log(a)
//     },0)
// }
// 不是0,1,2,3,4,5
// 而是6个6

// for(let i = 0; i < 6; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }
// 打印出0,1,2,3,4,5
// 是因为JS在for和let一起用时会加东西
// 每次循环会多创建一个i