// 类型VS类
// 类型
// 类型是JS数据的分类 有7种
// number string bool symbol null undefined object

// 类
// 类是针对于对象的分类 有无数种
// 常见的有Array/Function/Date/RegExp等

// 数组对象
// 定义一个数组
// let arr = [1,2,3]
// let arr = new Array(1,2,3)//元素为1，2，3
// let arr = new Array(3) //长度为3

// 数组对象的自身属性
// '0'/'1'/'2'/'length'
// 注意属性名没有数字 只有字符串

// 数字对象的共用属性
// 'push'/'pop'/'shift'/'unshift'/'join'

// 函数对象
// 定义一个函数
// function fn(x,y){return x + y}
// let fn2 = function fn(x,y){return x + y}
// let fn = (x,y)=>x+y
// let fn = new Function('x','y','return x + y')

// 函数对象自身属性
// 'name'/'length'

// 函数对象共用属性
// 'call'/'apply'/'bind'

// window是谁构造的
// Window
// 可以通过constructor属性看出构造者

// window.Object是谁构造的
// window.Function
// 因为所有函数都是window.Function构造的

// window.Function是谁构造的
// window.Function
// 因为所有函数都是window.Function构造的
// 浏览器构造了Function 然后指定它的构造者是自己