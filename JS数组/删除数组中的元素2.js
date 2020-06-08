// 删元素
// 跟对象一样
// let arr = ['a','b','c']
// delete arr['0']
// arr // [empty,'b','c']
// 数组长度并没有变

// 直接改length可以删除元素
// let arr = [1,2,3,4,5]
// arr.length = 1
// 重要: 不要随便修改length

// 删除头部的元素
// let arr = [1,2,3,4,5,6,7,8]
// arr.shift() //arr被修改 并返回被删除的元素
// 删除尾部的元素
// arr.pop() //arr被修改 并返回被删除的元素
// 删除中间的元素
// arr.splice(index,1) //删除index的一个元素
// arr.splice(index,1,'x') //并在删除位置添加x
// arr.splice(index,1,'x','y') //并在删除位置添加x,y

