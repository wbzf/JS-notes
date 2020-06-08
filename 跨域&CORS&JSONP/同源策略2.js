// 同源策略
// 不同源的页面之间 不准互相访问数据

// 源
// window.origin 或 location.origin 可以得到当前源
// 源 =  协议 + 域名 + 端口号

// 如果两个url的
// 协议
// 域名
// 端口号
// 完全一致 那么这两个url就是同源的

// 举例
// http://qq.com http://www.baidu.com 不同源
// https://baidu.com https://www.baidu.com 不同源
// 完全一致才算同源

// 同源策略定义

// 浏览器规定
// 如果JS运行在源A里 那么就只能获取源A的数据
// 不能获取源B的数据 即不允许跨域

// 举例
// 假设yaonniang.com/index.html 引用了cdn.com/1.js 
// 那么就说 1.js运行在源yaoniang.com里
// 注意这跟cdn.com没有关系 虽然1.js从它那里下载
// 所以1.js 就只能获取yaoniang.com的数据
// 不能获取baidu.com 或者 qq.com的数据

// 这就是浏览器的功能
// 为了保护用户隐私
// 浏览器故意要设计成这样的

// 如果没有同源策略

// 以QQ空间为例
// 源为 https://user.qzone.qq.com
// 假设 当前用户已经登录 (用Cookie)
// 假设 AJAX请求/friends.json可获取用户好友列表
// 到目前为止很正常

// 黑客来了
// 假设你的药娘分享https://qzone-qq.com 给你
// 实际上这是一个调🐟网站
// 你点开这个页面 这个网站也请求你的好友列表
// https://user.qzone.qq.com/friends.json
// 你的好友列表是不是就被黑客偷走了？

// 问题的根源
// 无法区分发送者
// QQ空间页面里得到JS和黑客网页里的JS
// 发的请求没有区别(referer有区别) XHR Referer
// 如果后台开发者没有检查referer那就完全没区别
// 所以 没有同源策略 任何页面都能偷QQ空间的数据

