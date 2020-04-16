// 七种数据类型
// number string bool symbol null undefined object

// 五个falsy值
// null undefined 0 NaN ''

// 对象object
// 第七种数据类型 唯一一种复杂类型
// 定义
// 无序的数据集合
// 键值对的集合

// 写法
// let obj = { name: "药娘", age: "18" }
// let obj = new Object({ name: "伪娘" })
// console.log({ name: "我要透药娘", age: "18" })

// 细节
// 键名是字符串 不是标识符 可以包含任意字符
// 引号可省略 省略之后就只能写标识符
// 就算引号省略了 键名也还是字符串(重要)
// let obj = {'':1}
// {name:"药娘"}是对象吗?

// 属性名
// 每个key都是对象的属性名

// 属性值
// 每个value都是对象的属性值

// let obj = {
//   1: "a",
//   3.2: "b",
//   1e2: true,
//   1e-2: true,
//   0.234: true,
//   0xff: true,
// };
// Object.keys(obj);
// ["1", "100", "255", "3.2", "0.01", "0.234"]
// Object.keys(obj)可以得到obj的所有key

// 变量做属性名;
// 之前都是用常量做属性名;
// let p1 = 'name'
// let obj = {p1:'药娘'} 这样写 属性名为'p1'
// let obj = {[p1]:'药娘'} 这样写 属性名为'name'

// 对比
// 不加[]的属性名会自动变成字符串
// 加了[]则会当做变量求值
// 值如果不是字符串 则会自动变成字符串

// let obj = {[1+2+3+4]:'十'}

// 对象的隐藏属性
// JS中每一个对象都有一个隐藏属性
// 这个隐藏属性存储着其共有属性组成的对象的地址
// 这个公有属性组成的对象叫做原型
// 也就是说 隐藏属性存储着原型的地址

// let obj = {}
// obj.toString()
// 因为obj的隐藏属性对应的对象上有toString()
