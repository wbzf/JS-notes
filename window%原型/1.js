// 打开浏览器
// chrome.exe
// 双击Chrome图标 就会运行chrome.exe文件
// 开启chrome进程 作为主进程
// 主进程会开启一些辅助进程 如网络服务 GPU加速
// 每新建一个网页 就有可能会开启一个子进程

// 浏览器的功能
// 发起请求 下载HTML 解析HTML 下载CSS 解析CSS 渲染页面 下载JS 解析JS 执行JS
// 功能模块：用户界面 渲染引擎 JS引擎 存储等

// JS引擎举例
// chrome用的是V8引擎 c++编写
// 网景用的是SpiderMonkey 后被Firefox使用 c++
// safari用的是 JavaScriptCore
// IE用的是Chakra(JScript9)
// Edge用的是Chakra(JavaScript)
// Node.js用的是V8引擎

// 主要功能
// 编译:把JS代码翻译为机器能执行的字节码或机器码
// 优化: 改写代码 使其更高效
// 执行: 执行上面的字节码或者机器码
// 垃圾回收: 把JS用完的内存回收 方便之后再次使用

// 执行JS代码
// 准备工作
// 提供API: window/document/setTimeout
// 上面这些东西都不是JS自身具备的功能
// 我们将这些功能成为运行环境runtime environment
// 一旦把JS放进页面 就开始执行JS
// JS代码在内存中运行

<script src="1\内存.png"></script>;

// 红色区域
// 红色专门用来存放数据 我们目前只研究该区域
// 红色区域并不存变量名 变量名在不知什么区
// 每种浏览器的分配规则并不一样

// Stack和Heap
// 红色区域分别为Stack栈和Heap堆
// Stack区特点: 每个数据顺序存放
// Heap区特点: 每个数据随机存放

// Stack和Heap举例
// let a = 1
// let b = a
// let person = { name: "药娘" age: "18", child: { name: "透药娘" } }
// let person2 = person

<script src="1\药娘.png"></script>;

// 规律
// 数据分为两种: 非对象和对象
// 非对象都存在Stack
// 对象都存在Heap
// =号总是会把右边的东西复制到左边

//对象被篡改了
// let person = { name: "伪娘" };
// let person2 = person;
// person2.name = '药娘'
// console.log(person.name)//'药娘'
