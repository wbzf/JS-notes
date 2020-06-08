// ES6引入了新语法
// class Square{
//     constructor(width){
//         this.width = width
//     }
//     getArea(){
//         return this.width * this.width
//     }
//     getLength(){
//         return this.width * 4
//     }
// }
// let circle = new Circle(5)
// circle.radius
// circle.getArea()
// circle.getLength()

// class语法引入了更多的概念
// class Square{
//     static x = 1
//     width = 0//初始化
//     constructor(width){
//         this.width = width
//     }
//     getArea(){
//         return this.width * this.width
//     }
//     getLength(){
//         return this.width * 4
//     }
//     get area2(){//只读属性 调用时不需要加括号
//         return this.width * this.width
//     }
// }

// class中两种函数写法的区别
// 语法1:
// class Person{
//     sayHi(name){}
// }
// 等价于
// function Person(){}
// Person.prototype.sayHi = function(name){}

// 语法2
// class Person{
//     sayHi = (name)=>{}
// }
// 等价于
// function Person(){
//     this.sayHi = (name)=>{}
// }

// 请不要使用 class，写一个 Person 构造函数，要求以下代码运行通过：
// let person = new Person('药娘', 18)
// person.name === '药娘' // true
// person.age === 18 // true
// person.sayHi() // 打印出「你好，我叫 药娘」

// let person2 = new Person('jack', 19)
// person2.name === '伪娘' // true
// person2.age === 19 // true
// person2.sayHi() // 打印出「你好，我叫 伪娘」

// 请用 class 再实现一次上面的功能