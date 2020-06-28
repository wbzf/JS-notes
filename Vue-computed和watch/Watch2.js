// watch 侦听
// 用途
// 当数据变化 执行一个函数
// demo3 撤销
// demo4 模拟computed

// 什么是变化
// demo5
// obj原本是{ a: 'a' }, 现在obj = { a: 'a' }
// obj变了没有 obj.a变了没有
// 简单类型看值 复杂类型(对象)看地址

// deep:true
// 如果object.a变了 object算不算也变了
// 如果你需要的答案是也变了 那么就用deep:true
// 如果你需要的答案是没有变 那么就用deep:false
// deep的意思是 监听object的时候是否往深了看

// 语法1
// watch:{
//     o1: () => {}, // 别用这种 这里的this是全局对象
//     o2: function (value, oldValue){},
//     o3(){},
//     o4: [f1,f2],
//     o5: 'methodName',
//     o6: {handler:fn, deep: true, immediate:true},
//     'object.a': function(){}
// }

// 语法2
// vm.$watch('xxx', fn, {deep:.. , immediate: ..})
