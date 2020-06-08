// target V.S currentTarget
// 区别
// e.target 用户操作的元素
// e.currentTarget 程序员监听的元素
// this是e.currentTarget 不推荐使用

// 举例
// div>span{文字} 用户点击文字
// e.target 就是span
// e.currentTarget 就是div
// 有时这两个是一样的

// 一个特例
// 只有一个div被监听(不考虑父子同时被监听)
// fn分别在捕获阶段和冒泡阶段监听click事件
// 用户点击的元素就是开发者监听的

// 代码
// div.addEventLisenter('click',f1)
// div.addEventLisenter('click',f2,true)
// 请问 f1先执行还是f2先执行
// 如果把两行调换位置后 请问哪个先执行
// 错误答案:f2 先执行
// 正确答案:谁先监听谁先执行
// 这是一个特例
// html4

// 取消冒泡
// 捕获不可以取消 但是冒泡可以
// e.stopPropagation()可中断冒泡 浏览器不再向上走
// 一般用于封装某些独立的组件
// html5

// 不可取消冒泡
// 有些事件不可取消冒泡
// MDN搜索scroll event 看到Bubbles和Cancelable
// Bubbles的意思是该事件是否冒泡
// Cancelable的意思是开发者是否可以取消冒泡
