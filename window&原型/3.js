// 原型 图里的prototype是干什么用的
// 打印 console.dir(window.Object.prototype)

// 代码
// let obj = {}
// obj.toString()
// 为什么不报错 为什么可以运行

<script src="1\obj.png"></script>;

// obj有一个隐藏属性
// 隐藏属性存储了Object.prototype对象的地址
// obj.toString()发现obj上没有toString
// 就去隐藏属性对应的对象里面找
// 于是就找到了Object.prototype.toString

// let a = [1,2,3]
// a.join('-')

// a有一个隐藏属性
// 隐藏属性存储了Array.prototype对象的地址
// a.join()发现a上没有join
// 就去隐藏属性对应的对象里面找
// 于是就找到了Array.prototype.join

// let obj = {}
// Object.toString === window.Object.prototype.toString

// let a = [1, 2, 3];
// a.push === window.Array.prototype.push;

<script src="1\JS原型.png"></script>;

// 要是obj改变了toSting 我创建一个新的obj2的toString是不是也改变了

// let obj = {};
// let obj2 = {};
// obj.toString === obj2.toString;
// obj.toString = "药娘";
// obj2.toString
<script src="1\change.png"></script>;

// 代码
// let obj2 = {}
// obj2.toString()
// obj和obj2有什么联系

// 相同点:都可以调用.toString()
// 不同点:地址不同 obj != obj2

// XXX.prototype存储了XXX对象的共同属性
// 这就是原型

// 如果没有原型
// 声明一个对象
// let obj = {
//     toString: window.Object.prototype.toString
//     hasOwnProperty: window.Object.prototype.hasOwnProperty
// }
// obj.toString()
// obj.hasOwnProperty()
// let obj2 = {
//     toString: window.Object.prototype.toString
//     hasOwnProperty: window.Object.prototype.hasOwnProperty
// }
// obj2.toString()
// obj2.hasOwnProperty()

// 原型让你无需重复声明共有属性
// 省代码 省内存

// 每个对象都有一个隐藏属性指向原型(对象)
// let obj = {};
// console.dir(obj);
// let array = [];
// console.dir(array);
// let f = function () {};
// console.dir(f);
//隐藏属性 __proto__

// Object是对象吗?
// console.dir(Object);
//只关心小写对象的隐藏属性

// prototype和__proto__区别是什么
// 都存着原型的地址
// 只不过prototype挂在函数上
// __proto__挂在每个新生成的对象上
<script src="1\原型2.png"></script>;
