// 数组变换
// let arr = [1,2,3,4,5,6]
// map n变n
// arr.map(item => item*item)

// map和foreach区别
// map
// 1.map方法返回一个新的数组 数组中的元素为原始数组调用函数后处理的值
// 2.map方法不会对空数组检测 map方法不会改变原始数组
// let arr = [0,2,4,6,8]
// let str = arr.map(item => {return item * 2; console.log(arr)})
// console.log(str)

// let arr = []
// arr.map(item => console.log('test'))

// forEach
// 1.forEach方法用来调用数组的每个元素 将元素传给回调函数
// 2.forEach对于空数组是不会调用回调函数的
// let arr = [0,2,4,6,8]
// let str = arr.forEach(item => {return item * 2; console.log(arr)})
// console.log(str)

// let arr = []
// arr.forEach(item => console.log('test'))

// filter n变少
// let arr = [1,2,3,4,5,6]
// arr.filter(item => {return item % 2 === 0 ? true : false})
// arr.filter(item => item % 2 === 0)

// reduce n变1
// let arr = [1,2,3,4,5,6]
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// arr.reduce((sum, item)=>{return sum + item},0/*sum初始值*/)

// let arr = [1,2,3,4,5,6]
// arr.reduce((result, item) => {return result.concat(item*item)},[])

// let arr = [1,2,3,4,5,6]
// arr.reduce((result, item) => {
//     if(item % 2 === 0){
//         return result.concat(item)
//     }else{
//         return result
//     }
// },[])
// arr.reduce((result, item) => result.concat(item % 2 === 0 ? item : []),[])

// 把数组变成星期
// let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
// let arr2 = arr.map(补全代码)
// console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']

// 找出所有大于 60 分的成绩
// let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
// let scores2 = scores.filter(补全代码)
// console.log(scores2) //  [95,91,82,72,85,67,66,91]

// 算出所有奇数之和
// let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
// let sum = scores.reduce((sum, n)=>{
//   补全代码
// },0)
// console.log(sum) // 奇数之和：598 