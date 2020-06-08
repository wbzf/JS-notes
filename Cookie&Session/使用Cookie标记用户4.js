// 目标2
// 实现用户登录功能
// 首页home.html 已登录用户可以看到自己用户名
// 登录页sign_in.html 供提交用户名和密码
// 输入的用户名密码如果是匹配的 就自动跳转到首页

// 前端写一个form 让用户填写name和password
// 前端监听submit事件
// 前端发送post请求 数据位于请求体
// 后端接收post请求
// 后端获取请求体中的name和password
// 后端读取数据 看是否有匹配的name和password
// 如果匹配 后端应标记用户已登录 怎么标记

// 目标3
// 标记用户是否登录

// Cookie
// Cookie是服务器下发送给浏览器的一段字符串
// 浏览器必须保存这个Cookie(除非用户删除)
// 之后发起相同二级域名请求(任何请求)时 浏览器必须附上Cookie

// 假如你是公园检票员 你怎么知道谁能进谁不能进
// 有票能进 没票不能进
// Cookie就是门票
// 有Cookie就是登录了 没Cookie就没登录
// 后端会给浏览器下发一个Cookie

// Set-Cookie响应头

// 目标4
// 显示用户名
// home.html渲染前获取user信息
// 如果有user 将{{user.name}}替换成user.name
// 如果无user 显示未登录

// 把logined改成user_id

// 有一个bug 
// 用户可以在浏览器工具里修改user_id

// 目标5 防篡改user_id
// 1.加密
// 将user_id加密发送给前端 后端读取user_id时解密
// 漏洞 加密后的内容无限期可用
// 解决办法: JWT

// 2.把信息隐藏在服务器
// 把用户信息放在服务器的x里 再给信息一个随机的id
// 把随机id发给浏览器
// 后端下次读取到id时 通过x[id]获取用户信息
// 因为id很长 而且随机 所以用户无法篡改id
// x是文件 不能使用内存 因为内存断点就清空
// 这个x又被叫做session(会话)


