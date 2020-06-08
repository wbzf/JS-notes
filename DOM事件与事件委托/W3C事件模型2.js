// addEventListener

// 事件绑定API
// IE5:baba.attachEvent('onclick',fn)//冒泡
// 网景:baba.addEventListener('click',fn)//捕获
// W3C:baba.addEventListener('click',fn,bool)

// 如果bool不传或为falsy
// 就让fn走冒泡 即当浏览器再冒泡阶段发现baba有fn监听函数
// 就会调用fn 并提供事件信息

// 如果bool为true
// 就让fn走捕获 即当浏览器在捕获阶段发现baba有fn监听函数
// 就会调用fn 并提供事件信息
// 图2
// html2
// html3

// 总结
// 儿子被点击了 算点击老子
// 捕获先调用爸爸的监听函数
// 冒泡先调用儿子的监听函数

// 先捕获再冒泡
// 注意e对象被传给所有的监听函数
// 事件结束后e对象就不存在了