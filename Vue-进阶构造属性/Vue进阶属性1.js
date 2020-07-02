// Vue进阶属性
// directives mixins extends provide inject

// directives
// 自定义指令
// 目标: 造出v-x 点击即出现一个x

// 两种写法
// 1.声明一个全局指令
// Vue.directive('x', directiveOptions)
// 你就可以在任何组件里使用v-x
// demo1

// 2.声明一个局部指令
// new Vue({
//     ...,
//     directives:{
//         "x": directiveOptions
//     }
// })
// v-x 只能用在该实例中
// demo2

// directiveOptions
// 五个函数属性
// bind(el,info,vnode,oldVnode) 类似created
// inserted(参数同上) 类似mounted
// update(参数同上) 类似update
// componentUpdated(参数同上) 用的不多
// unbind(参数同上) 类似destroyed

// 举例
// 自制v-on2指令 模仿v-on demo3

// 缩写
// directiveOptions在某些条件下可以缩写为函数 用的不多

// 指令的作用
// 主要用于DOM操作
// Vue实例/组件用于数据绑定 事件监听 DOM更新
// Vue指令主要目的就是原生DOM操作

// 减少重复
// 如果某个DOM操作你经常使用 就可以封装为指令
// 如果某个DOM操作比较复杂 也可以封装为指令

// Mixin 混入
// 混入就是复制

// 类比
// directives的作用是减少DOM操作的重复
// mixins的作用是减少data methods 钩子的重复

// 场景描述
// 假设我们需要在每个组件上添加name和time
// 在created destroyed时 打出提示 并报出存活时间
// 一个五个组件
// 1.给每个组件添加data和钩子 共五次
// 2.或者使用mixins减少重复
// demo4
// demo5

// mixins技巧
// 选项智能合并
// Vue.mixin 全局混入
// 看文档 不推荐使用

// extends 继承
// 减少重复
// 与mixins同样的需求
// 不想要每次都写一个mixins 怎么办
// 可以使用Vue.extend或options.extends
// const MyVue = Vue.extend({
//     data(){
//         return {
//             name:'',
//             time:undefined,
//         }
//     },
//     created(){
//         if(!this.name){
//             console.error('no name!')
//             this.time = new Date()
//         }
//     },
//     beforeDestroy(){
//         const duration = (new Date()) - this.time
//         console.log(`${this.name}存活时间${duration}`)
//     }
// })
// 然后就可以使用new MyVue(options) 了
// extends 是比 mixins 更抽象一点的封装

// provide和inject 提供和注入
// 使用举例
// 一键换肤功能: 默认蓝色 可以切换为红色
// 文字大小: 默认正常 可以改成大或小
// demo7
// 祖先栽树(provide) 后人乘凉(inject)

// 总结
// 作用:大范围的data和method等共用
// 注意:不能只传themeName不传changeTheme因为themeName的值是被复制给provide的
// 传引用可以吗 可以 但是不推荐 因为容易失控

// directives指令
// 全局用Vue.directive('x',{...})
// 局部用options.directives
// 作用是减少DOM操作相关重复代码

// mixins混入
// 全局用Vue.mixin({...})
// 局部用options.mixins:[mixin1,mixin2]
// 作用是减少options里的重复

// extends继承
// 全局用Vue.extend({...})
// 局部用options.extends:{...}

// provide/inject 提供和注入
// 祖先提供东西 后代注入东西
// 作用是大范围 隔N代共享信息
