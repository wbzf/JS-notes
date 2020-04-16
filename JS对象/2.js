// 增删改查

// 删除属性
// delete Object.xxx 或 delete obj['xxx']
// 即可删除obj的xxx属性
// 请区分 属性值为undefined 和 不含属性名

// 不含属性名
// 'xxx' in obj === false

// 含有属性名 但是值为undefined

// 注意obj.xxx === undefined
// 不能断定'xxx'是否为obj的属性
// let obj = {};
// let obj2 = { name: undefined };
// obj.name === undefined //true
// obj2.name === undefined //true

// 类比
// 你想不想透药娘
// A:不想透 // 不含属性名
// B:想透 但是透不起 // 含有属性名 但是值为undefined

// let obj = { name: "药娘", age: 18 };
// obj.name === undefined;
// {name:undefined, age:18}

// let obj = { name: "药娘", age: 18 }
// delete obj.name
// {age: 18}
