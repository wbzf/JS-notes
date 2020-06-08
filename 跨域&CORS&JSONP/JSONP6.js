// JSONP
// 没有CORS 需要跨域
// 我们可以随意引用JS
// 虽然我们不能访问qq.com:8888/friends.json 
// 但是我们能引用qq.com:8888/friends.js 
// 我们试着让JS包含数据

// 步骤
// yaoniang.com 访问 qq.com
// qq.com 将数据写到 /friends.js
// yaoniang.com 用script标签引用/friends.js
// /friends.js 执行 yaoniang.com 事先定义好的 window.xxx函数
// 然后 yaoniang.com 就通过window.xxx 获取到数据了(回调思想)
 
