// 点击事件
// 代码
// html1
// 即.爷爷>.爸爸>.儿子
// 给三个div分别添加事件监听fnYe/fnBa/fnEr

// 点击了谁？
// 点击文字 算不算点击儿子？
// 点击文字 算不算点击爸爸
// 点击文字 算不算点击爷爷
// 都算

// 调用顺序?
// 点击文字 最先调用fnYe/fnBa/fnEr中的哪一个函数
// 都行
// IE5任务先调用fnEr 网景认为先调用fnYe
// 最后闹到了W3C

// 2002年 W3C发布标准
// 规定浏览器应该同时支持两种调用顺序
// 首先按爷爷=>爸爸=>儿子的顺序看有没有函数监听
// 然后按儿子=>爸爸=>爷爷的顺序看有没有函数监听
// 有函数监听就调用 并提供事件信息 没有就跳过

// 术语
// 从外向内找监听函数 叫事件捕获
// 从内向外找监听函数 叫事件冒泡
// 图1

// 开发着自己选择把fnYe放在捕获阶段还是放在冒泡阶段
