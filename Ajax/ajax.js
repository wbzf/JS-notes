// 用JS发送请求和响应
// 这就是AJAX的全部内容

// AJAX是浏览器上的功能
// 浏览器可以发请求 收响应
// 浏览器在window上加了一个XMLHttpRequest函数
// 用这个构造函数可以构造一个对象
// JS通过它实现发请求 收响应

// 准备一个服务器
// 使用server.js作为服务器
// 添加index.html/main.js两个路由

// 安装node-dev
// yarn global add node-dev

// 加载CSS
// 以前用<link rel=stylesheet href="style.css">
// 现在用AJAX加载CSS

// 四个步骤
// 创建HttpRequest对象
// 调用对象的open方法
// 监听对象的onloadd&onerror事件
// 专业前端会改用onreadystatechange事件
// 在事件处理函数里操作CSS文件内容
// 调用对象的send方法(发送请求)

// 加载JS
// 以前我们用<script src="2.js"></script>
// 现在用AJAX加载JS

// 四个步骤
// 创建HttpRequest对象
// 调用对象的open方法
// 监听对象的onreadystatechange事件
// 在事件处理函数里操作js文件内容
// 调用对象的send方法(发送请求)

// 加载HTML
// 以前我们不会加载3.html 

// 四个步骤
// 创建HttpRequest对象
// 调用对象的open方法
// 监听对象的onreadystatechange事件
// 在事件处理函数里操作HTML文件内容
// 调用对象的send方法(发送请求)

// onreadystatechange事件
// 只要 readyState 属性发生变化，就会调用相应的处理函数。
// 这个回调函数会被用户线程所调用。XMLHttpRequest.onreadystatechange 
// 会在 XMLHttpRequest 的readyState 属性发生改变时触发 
// readystatechange 事件的时候被调用。

// XMLHttpRequest.readyState 属性返回一个 XMLHttpRequest  
// 代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个：

// 0	UNSENT	代理被创建，但尚未调用 open() 方法。
// 1	OPENED	open() 方法已经被调用。
// 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
// 3	LOADING	下载中； responseText 属性已经包含部分数据。
// 4	DONE	下载操作已完成。

// 一个请求的一生 readyState
// const request = new XMLHttpRequest() 0
// request.open() 1
// request.send() 2
// 第一个字符出现在浏览器 3(开始下载)
// 下载完 4

// 加载XML
// 以前我们不会加载4.xml

// 四个步骤
// 创建HttpRequest对象
// 调用对象的open方法
// 监听对象的onreadystatechange
// 在事件处理函数里操作responseXML
// 调用对象的send方法

// JSON
// JavaScript Object Notation
// JSON 是一门独立的语言 是标记语言

// 支持的数据类型
// String 只支持双引号 不支持单引号和无引号
// number 支持科学计数法
// bool true和flase
// null 没有undefined
// object
// Array
// 注意跟JS的七种数据类型区别开来
// 不支持函数 不支持变量(所以也不支持引用)

// 加载JSON
// 我们需要加载5.json

// 四个步骤
// 创建HttpRequest对象
// 调用对象的open方法
// 监听对象的onreadystatechange事件
// 在事件处理函数里使用JSON.parse
// 调用对象的send方法(发送请求)

// window.JSON
// JSON.parse
// 将符合JSON语法的字符串转换成JS对应类型的数据
// JSON字符串=>JS数据
// 由于JSON只有六种类型 所以转成的数据也只有6种
// 如果不符合JSON语法 则直接抛出一个Error对象 JSON.parse(`{'name':'药娘'}`)
// 一般用 try catch 捕获错误 
// let object
// try{
//     object = JSON.parse(`{'name':'药娘'}`)
// }
// catch(error){
//     console.log('failed') 
//     console.log(error)
//     object = {"name":"伪娘"}
// }

// JSON.stringify
// 是JSON.parse的逆运算
// JS数据 => JSON字符串
// 由于JS的数据类型比JSON多 所以不一定能成功
// 如果失败 就抛出一个Error对象

// const obj = {"name":'药娘'}
// JSON.stringify(obj)

// const obj = {"name":'药娘', fn:()=>{}}
// JSON.stringify(obj)

// 加载分页
