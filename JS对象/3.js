// 查看所有属性(读属性)

// 查看自身所有属性
// Object.keys(obj)

// 查看自身+共有属性
// console.dir(obj)

// 判断一个属性是自身的还是共有的
// obj.hasOwnProperty('toString')

// let obj = { name: "药娘", age: 18 }
// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// 'toString' in obj
// obj.hasOwnProperty('toString')

// 每个对象都有原型;
// 每个原型存着对象的共有属性;
// 比如obj的原型就是一个对象;
// obj.__proto__存着这个对象的地址;
// 这个对象里有toString / constructor / valueOf等属性;

// 对象的原型也是对象
// 所以对象的原型也有原型
// obj={} 的原型即为所有对象的原型
// 这个包含所有对象的共有属性 是对象的根
// 这个原型也有原型 是null
// console.log(obj.__proto__.__proto__)

// 查看属性
// 两种方法查看属性
// 中括号语法: obj['key']
// 点语法: obj.key
// obj[key] 变量key值一般不为'key'

// let obj = {name:'药娘',age = 18}
// obj['name'] '药娘'
// obj.name '药娘'
// obj[name] undefined
// window.name = 'age'
// obj[name] 18

// obj.name 等价于 obj['name']
// obj.name 不等价于 obj[name]
// 这里的name是字符串 不是变量

// let name = 'xxx'
// obj[name] 等价于 obj['xxx']
// 而不是
// obj['name'] 和 obj.name

// let list = ["name", "age", "gender"];
// let person = { name: "药娘", age: 18, gender: "man" };
// for (let i = 0; i < list.length; i++) {
//   let name = list[i];
//   console.log(person.name);
//   console.log(person[name]);
// }
