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
