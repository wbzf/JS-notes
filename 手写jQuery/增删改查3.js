// window.$ = window.jQuery

// 命名风格
// 下面的代码令人误解
// const div = $('div#test')
// 我们会误认为div是一个DOM
// 实际上div是jQuery构造的api对象

// 改成这样
// const $div = $('div#test')
// $div.appendChild不存在 因为它不是DOM对象
// $div.find存在 因为它是jQuery对象