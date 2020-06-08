// 域名
// bilibili.com

// 域名就是对应IP的别称
// bilibili.com 对应什么IP
// ping bilibili.com

// 一个域名可以对应不同IP
// 这个叫做负载均衡 防止一台机器撑不住
// 一个IP可以对应不同域名
// 这个叫做共享主机 没钱的就这样做

// 域名和IP是怎么对应起来的
// 通过DNS nslookup
 
// 当你输入bilibili.com
// 过程 
// 你的Chrome浏览器会向电信提供的DNS服务器询问bilibili.com对应什么IP
// 电信会回答一个IP
// 然后Chrome才会向对应IP的80/443端口发送请求
// 请求内容是查看bilibili.com的首页

// 如何请求不同的页面
// 路径可以做到
// 在同一个服务器上使用不同的路径可以得到不同的页面
// https://developer.mozilla.org/zh-CN/docs/Web/HTML
// https://developer.mozilla,org/zh-CN/docs/Web/CSS

// 同一个页面 不同内容
// 查询参数可以做到
// www.baidu.com/s?wd=伪娘
// www.baidu.com/s?wd=药娘

// 同一个内容 不同位置
// 锚点可以做到
// https://developer.mozilla.org/zh-CN/Web/CSS#参考书
// https://developer.mozilla.org/zh-CN/Web/CSS#教程
// 注意锚点不会传给服务器

// URL(统一资源定位符)
// 协议+域名或IP+端口号+路径+查询字符串+锚点
// URL.png 





