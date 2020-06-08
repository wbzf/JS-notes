// 形式参数
// 形式参数的意思就是非实际参数
// function add(x,y){
//     return x + y
// }
// 其中x和y就是形参 因为并不是实际的参数
// add(1,2) // x = 1 y = 2
// 调用add时 1 和 2是实际参数 会被赋值给x,y

// function addObject(x,y){
//     return x.value + y.value
// }
// let xx = {value:1}
// let yy = {value:2}
// function addObject(x,y){
//     x.name = 'xxx'
//     return x.value + y.value
// }
// addObject(xx,yy)
// console.dir(xx)

// 形参可认为是变量声明
// 上面代码近似等价于下面代码
// function add(){
//     let x = arguments[0]
//     let y = arguments[1]
//     return x + y
// }

// 形参可多可少 形参只是给参数取名字
// function add(x){
//     return x + arguments[1]
// }
// add(1,2)
// function add(x,y,z){
//     return x + y
// }
// add(1,2)

// 返回值
// 每个函数都有返回值
// function hi(){console.log('hi')}
// hi()
// 没写return 所以返回值是undefinded
// function hi(){return console.log('hi')}
// hi()
// 返回值为console.log('hi')的值 即undefined

// 函数执行完了后才会返回
// 只有函数有返回值
// 1 + 2没有返回值
// 1 + 2的值为3
