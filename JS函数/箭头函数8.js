// 箭头函数
// 没有arguments和this

// 里面的this就是外面的this
// console.log(this) //window
// let fn = () => console.log(this)
// fn() //window

// 就算你加call都没有
// fn.call({name:'药娘'}) // window

// let fn = () => console.log(arguments)
// fn(1,2,3) //报错

// 总结
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