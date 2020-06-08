// let person = {
//     name: '药娘',
//     sayHi(){
//         console.log(this.name)
//     }
// }
// person.sayHi.call({name:'药娘'})

// function add(x,y){
//     return x + y
// }
// 没有用到this
// add.call(undefined,1,2)

// 为什么要多写一个undefined
// 因为第一个参数要作为this
// 但是代码里没有用this
// 所以只能用undefined占位
// 用null也可以

// Array.prototype.forEach2 = function(){
//     console.log(this)
// }
// let array = [1,2,3]
// array.forEach2.call(this) //[1,2,3]
// array.forEach2()//[1,2,3]

// Array.prototype.forEach2 = function(fn){
//     for(let i = 0; i < this.length; i++){
//         fn(this[i],i,this)
//     }
// }
// this是什么
// 由于大家使用forEach2的时候总会用arr.forEach2
// 所以arr就被自动传给forEach2了

// this一定是数组吗
// 不一定比如
// Array.prototype.forEach.call({0:'a',1:'b',length:2},item => console.log(item))

// this的两种使用方法
// 隐式传递
// fn(1,2) //等价于fn.call(undefined,1,2)
// obj.child.fn(1) //等价于obj.child.fn.call(obj.child,1)

// 显示传递
// fn.call(undefined,1,2)
// fn.apply(undefined,[1,2])

// 绑定this
// 使用.bind可以让this不被改变
// function f1(p1,p2){
//     console.log(this,p1,p2)
// }
// let f2 = f1.bind({name:'药娘'})
// //那么f2就是f1绑定了this之后的新函数
// f2() //等价于f1.call({name:'药娘'})

// .bind还可以绑定其他参数
// let f3 = f1.bind({name:'药娘'},'hi')
// f3() //等价于f1.call({name:'药娘'}，hi)

