// 如何阻止滚动
// scroll事件不可取消冒泡
// 阻止scroll默认动作没用 因为先有滚动才有滚动事件
// 要阻止滚动 可阻止wheel和touchstart的默认动作
// 注意你需要找准滚动条所在的元素
// html6
// 但是滚动条还能用 可用CSS让滚动条width:0

// CSS也行
// 使用overflow:hidden 可以直接取消滚动条
// 但此时JS依然可以修改scrollTop

// 总结
// target和currentTarget
// 一个是用户点击的 一个是开发者监听的

// 取消冒泡
// e.stopPropagation()

// 事件的特性
// Bubbles表示是否冒泡
// Cancelable表示是否支持开发者取消冒泡
// 如scroll不支持取消冒泡

// 如何禁用滚动
// 取消特定元素的wheel和touchstart的默认动作
