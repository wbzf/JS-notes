// 增加数组中的元素
// let arr = [3,5,7,88,43,56,876]
// 在尾部加元素
// arr.push(1) //修改arr 返回新长度
// arr.push(44,55) //修改arr 返回新长度

// 在头部加元素
// arr.unshift(2) //修改arr 返回新长度
// arr.unshift(34,33) //修改arr 返回新长度

// 在中间添加元素
// arr.splice(index,0,'x') //在index处插入'x'
// arr.splice(index,0,'x','y')

// 修改数组中的元素
// let arr = [1,2,3,4,5,6,7,8,9]
// 反转顺序
// arr.reverse() //修改原数组
// 反转字符串
// let s = 'abcde'
// s.split('').reverse().join('')

// 自定义顺序
// let arr = [2,1,9,5,4,66,4,33,43]
// arr.sort()
// arr.sort(function(a,b){
//     if(a < b){
//         return -1
//     }
//     if(a > b){
//         return 1
//     }
//     return 0
// })
// arr.sort((a,b) => {return a-b})
// arr.sort((a,b) => a-b)

// let arr = [{name:'a',score:99},{name:'b',score:100},{name:'c',score:80}]
// arr.sort((a,b) => a.score - b.score)