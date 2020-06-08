// let obj = new Object()的原型是Object.prototype
// let arr = new Array()的原型是Array.prototype
// let square = new Square()的原型是Square.prototype
// let fn = new Function()的原型是Function.prototype

// 因为new操作符故意这么做的

// new X()自动做了四件事情
// 自动创建空对象
// 自动为空对象关联原型 原型地址指定为X.prototype
// 自动将空对象作为this关键字运行构造函数
// 自动return this

// 结论 
// 你是谁构造的 你的原型就是谁的prototype属性对应的对象

// 原型公式
// 对象.__proto__ === 其构造函数.prototype

// let x = {}
// 1.x的原型是什么？
// 2.x.__proto__的值是什么？
// 3.上面两个问题是等价的

// let square = new Square(5)
// 1.square的原型是什么？
// 2.square.__proto__的值是什么?

//特殊
// 1.Object.prototype是哪个函数构造出来的？//不知道
// 2.Object.prototype的原型是什么？//没有原型
// 3.Object.prototype.__proto__? //null
// let x = Object.prototype
// x.__proto__ === Object.prototype //false
// x.__proto__ null

// Square最终版
// function Square(width){
//     this.width = width
// }
// Square.prototype.getArea = function(){
//     return this.width * this.width
// }
// Square.prototype.getLength = function(){
//     return this.width * 4
// }
// let square = new Square(5)
// square.width
// square.getArea()
// square.getLength()
