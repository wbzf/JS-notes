// 函数是对象

// 定义一个函数
// function 函数名(形式参数1, 形式参数2){
//     语句
//     return 返回值
// }
// function fn(x,y){return x + y}

// 匿名函数
// 上面的具名函数 去掉函数名就是匿名函数
// let a = function(x,y){return x + y}
// 也叫函数表达式

// let a = function fn(x,y){return x + y}
// fn(1,2) //报错 fn作用域在等号的右边

// 箭头函数
// let f1 = x => x * x
// let f2 = (x,y) => x + y
// let f3 = (x,y) => {console.log('药娘'); return x + y;} //如果有分号 需要加大括号 返回值前加return
// let f4 = (x,y) => {return {name:x, age:y}}
// let f4 = (x,y) => ({name:x, age:y}) //直接返回对象会出错 需要加个圆括号

// 用构造函数
// let f = new Function('x','y','return x + y')
// let fn = new Function('x','y','console.log(\'hi\'); return x + y')
// 基本没人用
// 所有函数都是Function构造出来的
// 包括Object Array Function 也是

// 函数自身VS函数调用 fn VS fn()
// let fn = () => console.log('药娘')
// 结果
// 不会有任何结果
// 因为fn没有执行
// 有圆括号才是调用

// let fn = () => console.log('药娘')
// let fn2 = fn
// fn2()
// 结果
// fn保存了匿名函数订单地址
// 这个地址被复制给了fn2
// fn2()调用了匿名函数
// fn和fn2都是匿名函数的引用而已
// 真正的函数既不是fn也不是fn2


