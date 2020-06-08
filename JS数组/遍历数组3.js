// 查看所有元素
// 查看所有属性名
// let arr = [1,2,3,4,5] 
// arr.x = 'xxx'
// Object.keys(arr)
// for(let key in arr){
//     console.log(`${key}:${arr[key]}`)
// }

// 查看数字(字符串)属性名和值
// for(let i = 0; i < arr.length; i++){
//     console.log(`${i}: ${arr[i]}`)
// }
// 你要让i从0增长到length-1
// arr.forEach(function(item,index){ //回调
//     console.log(`${index}: ${item}`)
// })
// 也可以用forEach/map等原型上的函数

// 自己写一个forEach
// function forEach(array,fn){
//     for(let i = 0; i < array.length; i++){
//         fn(array[i],i,array)
//     }
// }
// forEach(['a','b','c'],function(x,y,z){
//     console.log(x,y,z)
// })
// forEach用for访问array的每一项
// 对每一项调用fn(array[i],i,array)

// 查看单个属性
// 跟对象一样
// let arr = [111,222,333]
// arr[0]

// 索引越界
// arr[arr.length] === undefined
// arr[-1] === undefined

// 举例
// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i].toString())
// }
// 报错

// 查找某个元素是否在数组里
// arr.indexOf(item) //存在返回索引 否则返回-1

// 使用条件查找元素
// arr.find(item => item % 2 === 0) //找到第一个偶数

// 使用条件查找元素的索引
// arr.findIndex(item => item % 2 === 0) //找到第一个偶数的索引
