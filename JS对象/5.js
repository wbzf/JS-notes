// 删;
// delete obj["name"];
// "name" in obj; //false
// obj.hasOwnProperty("name"); //false

// 查
// Object.keys(obj)
// console.dir(obj)
// obj['name']
// obj.name 这里的name是字符串
// obj[name] 这里的name是变量

// 改
// 改自身obj['name'] = '药娘'
// 批量改自身Object.assign(obj,{age:18,gender:'man'})
// 改共有属性obj.__proto__.toString = 'xxx'
// 改共有属性Object.prototype.toString = 'xxx'
// 改原型obj.__proto__ = common
// 改原型let obj = Object.create(common)

// 增
// 已有属性则改 没有属性则增