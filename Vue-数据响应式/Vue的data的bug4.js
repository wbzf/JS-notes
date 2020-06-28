// Object.defineProperty的问题;
// Object.defineProperty(obj, 'n', {...})
// 必须要有一个'n' 才能监听和代理obj.n
// 如果前端开发没有给n怎么办
// 1.Vue会给出一个警告 demo2
// 2.Vue只会检查第一层属性 demo3
// 此时我如果点击set b 视图中不会显示1
// 因为Vue没办法监听一开始不存在的obj.b

// 解决办法
// 1.把key都声明好 后面再加属性
// 2.使用Vue.set 或者 this.$set

// Vue.set和this.$set
// 作用
// 新增key
// 自动创建代理和监听(如果没有创建过)
// 触发UI更新(但不会立即更新)

// 数组的变异方法

// data中有数组怎么办
// 你没有办法提前声明所有key
// demo4
// 数组的长度可以一直增加 下标就是key
// 你没有办法提前把数组的key都声明出来
// Vue也不能检测对你新增了下标

// Vue的做法
// 篡改数组的API
// 这7个API都会被Vue篡改 调用后会更新UI

// ES6
// class VueArray extends Array{
//     push(...args){
//         const oldLength = this.length // this当前数组
//         super.push(...args)
//         for(let i = oldLength; i < this.length; i++){
//             Vue.set(this,i.this[i])
//         }
//         console.log('我透到了药娘')
//     }
// }

// ES5
// const VueArrayPrototype = {
//     push:function(){
//         console.log("我透到了药娘")
//         return Array.prototype.push.apply(this, arguments)
//     }
// }
// const array = Object.create(VueArrayPrototype)
// array.push(1)

总结
对象中新增的key
Vue没有办法事先监听和代理
要使用set来新增key 创建监听和代理 更新UI
最好提前把属性都写出来 不要新增key
但数组做不到不新增key

数组中的新增key
Vue篡改了7个API方便你对数组进行增删
这7个API会自动处理监听和代理 并更新UI
