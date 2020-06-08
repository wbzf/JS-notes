// 对象需要分类吗
// 代码 输出各种形状的面积和周长

// 正方形
// let square = {
//   width: 5,
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
// };
// 正方形有3个属性 边长 面积 周长

// 给我来12个正方形;
// let square = {
//   width: 5,
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
// };

// let square2 = {
//   width: 6,
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
// };

// let square3 = {...}


// 用for循环搞定;
// let squareList = [];
// for (let i = 0; i < 12; i++) {
//   squareList[i] = {
//     width: 5,
//     getArea() {
//       return this.width * this.width;
//     },
//     getLength() {
//       return this.width * 4;
//     },
//   };
// }

// width 不全是5 怎么办
// let squareList = [];
// let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
// for (let i = 0; i < 12; i++) {
//   squareList[i] = {
//     width: widthList[i],
//     getArea() {
//       return this.width * this.width;
//     },
//     getLength() {
//       return this.width * 4;
//     },
//   };
// }
// 垃圾代码 浪费了太多内存
// squareList[0].getArea === squareList[1].getArea
/* <script src="JS对象分类\药娘.png"></script>; */

// 继续改
// 借助原型
// let squareList = [];
// let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
// let squarePrototype =  {
//     getArea(){
//         return this.width * this.width
//     },
//     getLength(){
//         return this.width * 4
//     }
// }
// for(let i = 0; i < 12; i++){
//     squareList[i] = Object.create(squarePrototype)
//     squareList[i].width =  widthList[i]
// }
// squareList[0].__proto__ === squareList[1].__proto__
// 还是垃圾 square的代码太分散

// 抽离到函数
// let squareList = []
// let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
// function createSquare(width){//这个函数叫做构造函数 构造函数就是可以构造出对象的函数
//     let obj = Object.create(squarePrototype) //以squarePrototype为原型创建空对象
//     obj.width = width
//     return obj
// }
// let squarePrototype = {
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
// };
// for(let i= 0; i < 12; i++){
//     squareList[i] = createSquare(widthList[i])
// }
// squarePrototype原型和createSquare函数还是分散的

// 函数和原型结合
// let squareList = [];
// let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
// function createSquare(width) {
//   //这个函数叫做构造函数 构造函数就是可以构造出对象的函数
//   let obj = Object.create(createSquare.squarePrototype);
//   obj.width = width;
//   return obj;
// }
// createSquare.squarePrototype = {
//   //把原型放到函数上
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
//   constructor: createSquare, // 方便通过原型找到构造函数 互相引用
// };
// for (let i = 0; i < 12; i++) {
//   squareList[i] = createSquare(widthList[i]);
//   console.log(squareList[i].constructor); //可以知道谁构造了这个对象
// }

// new操作符;
// let squareList = [];
// let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
// function Square(width) {
//   this.width = width;
// }
// Square.prototype.getArea = function () {
//   return this.width * this.width;
// };
// Square.prototype.getLength = function () {
//   return this.width * 4;
// };
// for (let i = 0; i < 12; i++) {
//   squareList[i] = new Square(widthList[i]);
//   console.log(squareList[i].constructor);
// }
// 每个函数都有prototype属性;
// 每个prototype都有constructor属性;

// 总结
// new X()自动做了四件事
// 自动创建空对象
// 自动为空对象关联原型 原型地址指定为X.prototype
// 自动将空对象作为this关键字运行构造函数
// 自动return this

// 构造函数X
// X函数本身负责给对象本身添加属性
// X.prototype对象负责保存对象的共用属性

// function Mtf(name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
// }
// Mtf.prototype.eat = function () {
//   console.log("吃饭");
// };
// Mtf.prototype.drunk = function () {
//   console.log("喝水");
// };
// let mtf = new Mtf("七海", 18, 168);

// 代码规范
// 大小写
// 所有构造函数首字母大写
// 所有被构造出来的对象 首字母小写

// 词性
// new后面的函数 使用名词形式
// 其他函数 一般使用动词开头
// 如createSquare(5) createElement('div')
