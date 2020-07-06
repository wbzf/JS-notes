// 对比普通代码与函数

// 这是普通代码
// let b = 1 + a 

// 这是函数
// let f = () => 1 + a
// let b = f()

// 普通代码立即求值 读取a的当前值
// 函数会等调用时再求值 即延迟求值 且求值时才会读取a的最新值

// 对比Reacte元素和函数组件
// App1 = React.createElement('div', null, n)
// App1 是一个React元素
// App2 = () => React.createElement('div', null, n)
// App2是一个函数组件

// 函数App2是延迟执行的代码 会在被调用的时候执行

// React元素
// createElement的返回值element可以代表一个div
// 但element并不是真正的div(DOM对象)
// 所以我们一般称element为虚拟DOM对象

// () => React元素
// 返回element的函数 也可以代表一个div
// 这个函数可以多次执行 每次得到最新的虚拟div
// React会对比两个虚拟div 找出不同 局部更新视图
// 找不同的算法叫做DOM Diff算法



