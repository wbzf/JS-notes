// jQuery()

// jQuery('.test')

// const api = jQuery('.test') //不返回元素 返回api对象
// api.addClass('red') // 遍历所有刚才获取的元素 添加.red

// const api = jQuery('.test')
// api.addClass('red') // this就是api
//         .addClass('blue')
//         .addClass('green') //链式操作

// obj.fn(p1) // 函数里的this就是obj
// obj.fn.call(obj,p1)

// jQuery('.test')
//     .addClass('red')
//     .addClass('blue')
//     .addClass('green')

// console.log($('.test1').find('.child'))
// $('.test1').find('.child').addClass('red') // red不会加到child上 会加到test1上

//改elements之后
// $('.test1').find('.child').addClass('red') // 有bug

// // bug
// const api1 = jQuery('.test1')
// api1.addClass('blue')
// const api2 = api1.find('.child').addClass('red')
// api1.addClass('green') // 应该加到test1上 由于修改了elements结果加到了child上

// 修改完之后
// const api1 = jQuery('.test1')
// api1.addClass('blue')
// const api2 = api1.find('.child').addClass('red')
// api1.addClass('green')


// const api1 = $('.test1')
// const api2 = api1.find('.child').addClass('red').addClass('blue').addClass('green')
// const oldApi = api2.end().addClass('yellow')
// $('.test1').find('.child').addClass('red').addClass('blue').addClass('green').end().addClass('yellow')

const x = $('.test1').find('.child')
x.each(div => console.log(div))

// const x = $('.test')
// x.parent().prints()

// $('.test1').children().prints()
