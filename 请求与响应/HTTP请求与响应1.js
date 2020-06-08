// 请求与响应模型
// 请求与响应.png

// 如何发请求
// 方法
// 用Chorme地址栏
// 用curl

// 帮你发请求的工具叫 用户代理

// 如何做出一个响应

// 需要服务器
// Node.js 有一个http模块可以做到

// 这些代码就是服务器代码 一般放在服务器上
// path是不带查询参数的路径 /x 
// query是查询参数的对象形式 {a:'1'}
// queryString是查询参数的字符串形式 ?a=1
// pathWithQuery是带查询参数的路径 一般不用
// request 是请求对象
// response 是响应对象

// 代码逻辑
// 语法
// `这种字符串` 里面可以回车
// '这种字符串' 里面要回车只能用\n 表示

// 逻辑
// 每次收到请求都会把中间的代码执行一遍
// 用if else 判断逻辑 并返回响应
// 如果是已知路径 一律返回200
// 如果是未知路径 一律返回404
// Content-Type 表示内容的 类型/语法
// response.write() 可以填写返回的内容
// response.end() 表示响应可以发给用户了

// 注意
// URL里的后缀没有用 /y.css 不一定是CSS内容
// Content-Type才是决定文件类型的关键

// 请求和响应的规范写法

// HTTP基础概念
// 请求 
// 请求动词 路径加查询参数 协议名/版本
// Host: 域名或IP
// Content-Type: 请求体的格式
// 回车
// 请求体(也就是上传内容)
// curl -v -x POST --data '我要透药娘' http://localhost:8888/

// 细节
// 三部分: 请求行 请求头 请求体
// 请求动词有GET/POST/PUT/PATCH/DELETE等
// 请求体在GET请求中一般为空
// 大小写不敏感

// 响应
// 协议名/版本 状态码 状态字符串
// Content-Type: 响应体的格式
// 回车
// 响应体

// 细节
// 三部分: 状态行 响应头 响应体
// 常见的状态码

// 用curl构造请求
// curl -v http://localhost:8888/

// 设置请求动词
// -X POST 

// 设置路径和查询参数
// 直接在url后面加

// 设置请求头
// -H 'Name:Value' 或者 --header 'Name:value'

// 设置请求体
// -d '内容' 或者 --data '内容'

// 用Node.js读取请求
// 读取请求动词
// request.method

// 读取路径
// request.url 路径 带查询参数
// path 纯路径 不带查询参数
// query 只有查询参数

// 读取请求头
// request.getHeader('accept')

// 用 Node.js 设置响应
// 设置响应状态码
// response.statusCode = 200

// 设置响应头
// response.setHeader('Content-Type','text/html')

// 设置响应体
// response.write('内容')




