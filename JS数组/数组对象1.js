// 数组对象  一种特殊的对象
// JS其实没有真正的数组 只是用对象模拟数组

// JS的数组不是典型数组
// 典型的数组
// 元素的类型相同
// 使用连续的内存存储
// 通过数字下标获取元素

// 但JS的数组不这样
// 元素的数据类型可以不同
// 内存不一定是连续的(对象是随机存储的)
// 不能通过数字下表 而是通过字符串下标
// 这意味着数组可以有任何key
// 比如
// let arr = [1,2,3]
// arr['xxx'] = 1 

// 创建一个数组
// 新建
// let arr = [1,2,3]
// let arr = new Array(1,2,3)
// let arr = new Array(3)

// 转化
// let arr = '1,2,3'.split(',')
// let arr = '123'.split('')
// Array.from('123')
// Array.from({0:'a', 1:'b', 2:'c', 3:'d' ,length:4})
// Array.from({0:'a', 1:'b', 2:'c', 3:'d' ,length:2})

// 伪数组
// xxx.html
// let divList = document.querySelectorAll('div')
// divList.push(4) //报错
// let divArray = Array.from(divList)
// {0:'a', 1:'b', 2:'c', 3:'d' ,length:4}
// 伪数组的原型链中并没有数组的原型
// 没有数组共用属性的数组 就是伪数组

// 合并两个数组 得到新数组
// arr1 = [1,2,3,4,5]
// arr2 = [6,7,8,9]
// arr1.concat(arr2)

// 截取一个数组的一部分
// arr1.slice(1) //从第二个元素开始
// arr1.slice(0) //全部截取
// let arr3 = arr1.slice(0) //数组复制
// JS原生只提供浅拷贝



