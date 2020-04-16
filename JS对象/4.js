// 修改或增加属性(写属性);
// 直接赋值
// let obj = { name: "药娘" }; name是字符串
// obj.name = '伪娘' name是字符串
// obj['name'] = '伪娘'
// obj[name] = '伪娘' 错 因为name值不确定
// obj['na'+'me'] =  '伪娘'
// let key = 'name'; obj[key] = '伪娘'
// let key = 'name'; obj.key = '伪娘' 错
// 因为obj.key 等价于 obj['key']

// 批量赋值;
// Object.assign(obj, { age: 18, gender: "man" });

// 修改或增加共有属性;
// 无法通过自身修改或增加共有属性;
// let obj = {},
//   obj2 = {}; //共有toString
// obj.toString = "xxx" 只会在改obj自身属性
// obj2.toString还是在原型上

// 我偏要修改或增加原型上的属性
// obj.__proto__.toString = 'xxx' //不推荐用__proto__
// Object.prototype.toString = 'xxx'
// 一般来说 不要修改原型 会引起很多问题
// obj.__proto__ = null

// let common = {name:'药娘', age:18}
// let person = {xxx:'xxx'}
// person.__proto__ = common

// 修改隐藏属性
// 不推荐使用__proto__
// let obj = {name:'药娘'}
// let obj2 = {name:'伪娘'}
// let common = {age:18}
// obj.__proto__ = common
// obj2.__proto__ = common

// 推荐使用Object.create
// let obj = Object.create(common)
// obj.name = '药娘'
// let obj2 = Object.create(common)
// obj2.name = '伪娘'
// 要改就一开始改 别后来再改
