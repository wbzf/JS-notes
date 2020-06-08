// 异步与Promise 
// JS异步编程模型

// 什么是异步？ 什么是同步？
// 网上的解释经常混淆异步与回调

// 异步
// 如果能直接拿到结果
// 那就是同步
// 比如你在医院挂号 你拿到号才会离开窗口
// 同步任务可能消耗10毫秒 也可能需要3秒
// 总之不拿到结果你是不会离开的

// 如果不能直接拿到结果
// 那就是异步
// 比如你在餐厅门口等位 你拿到号可以去逛街
// 什么时候才能真正吃饭？
// 你可以每10分钟去餐厅问一下(轮询)
// 你也可以扫码用微信接受通知(回调)

// 异步举例
// 以AJAX为例
// request.send()之后 并不能直接得到response
// 不信console.log(request.response)试试
// 必须等到readyState变为4后 浏览器回头调用request.onreadystatechange函数
// 我们才能得到request.response
// 这跟餐厅给你发送微信提醒的过程是类似的

// 回调callback
// 你写自己用的函数 不是回调
// 你写给别人用的函数 就是回调
// request.onreadystatechange就是我写给浏览器调用的
// 意思就是浏览器在将来调用一下这个函数
// 写了却不调用 给别人调用的函数 就是回调

// 我表哥要去我姑妈家帮我 拿回我的剃须刀
// 他拿回来之前 我不能 刮胡子
// 他拿回来之前 我可以 洗澡
// 剃须刀拿回来之后 我就可以刮胡子
// 洗澡和拿回我的剃须刀 是异步的
// 刮胡子是拿回剃须刀的 回调callback

// 回调举例
// function f1(){}
// function f2(fn){
//     fn()
// }
// f2(f1)

// 我调用f1没有？ 没有调用
// 我把f1传给f2(别人)
// f2调用了f1
// f1是我写给f2调用的函数
// 所以f1是回调

// 异步和回调的关系
// 关联
// 异步任务需要在得到结果时通知JS来拿结果
// 怎么通知呢？
// 可以让JS留一个函数地址(电话号码)给浏览器
// 异步任务完成时浏览器调用该函数地址即可(拨打电话)
// 同时把结果作为参数传给该函数(电话里说可以来吃了)
// 这个函数是我写给浏览器调用的 所以是回调函数

// 区别
// 异步任务需要用到回调函数来通知结果
// 但回调函数不一定只用在异步任务里
// 回调可以用到同步任务里
// array.forEach(n => console.log(n)); 就是同步回调

// 我怎么知道一个函数是同步还是异步
// 看特征或者文档

// 如果一个函数的返回值处于
// setTimeout
// AJAX(XMLHttpRequest)
// addEventListener
// 这三个东西内部 那么这个函数就是异步函数

// 摇骰子
// function 摇骰子(){
//     setTimeout(()=>{
//         return parseInt(Math.random()*6) + 1
//     },1000)
//     // return undefined
// }
// 摇骰子()没有写return 那就是return undefined
// 箭头函数里有return 返回真正的结果
// 所以这是一个异步函数/异步任务

// const n = 摇骰子()
// console.log(n) // undefined

// 怎么拿到异步结果
// 可以用回调 写个函数 然后把函数地址给它
// function f1(x){console.log(x)}
// 摇骰子(f1)
// 然后我要求摇骰子函数得到结果后把结果作为参数传给f1

// function 摇骰子(fn){
//     setTimeout(()=>{
//         fn(parseInt(Math.random() * 6) + 1)
//     },1000)
// }

// 化简为箭头函数
// 由于f1声明之后只用了一次 所以可以删掉f1
// function f1(x){console.log(x)}
// 摇骰子(f1)
// 改为
// 摇骰子(x => {
//     console.log(x)
// })
// 再化简为
// 摇骰子(console.log)
// 如果参数个数不一致就不能这样简化 有个面试题
// const array = ['1','2','3'].map(parseInt)
// console.log(array)
// const array = ['1','2','3'].map((item, i, arr)=>{
//     return parseInt(item)
// })
// // parseInt('1', 0, arr) => 1
// // parseInt('2', 1, arr) => NaN
// // parseInt('3', 2, arr) => NaN
// console.log(array)

// 总结
// 异步任务不能拿到结果
// 于是我们传一个回调给异步任务
// 异步任务完成时调用回调
// 调用的时候把结果作为参数

// 如果异步任务有两个结果 成功或失败 怎么办
// 两个结果
// 方法一 回调接受两个参数
// fs.readFile('./1.txt', (error,data)=>{
//     if(error){console.log('failed'); return}
//     console.log(data.toString()) //成功
// })
// 方法二 搞两个回调
// ajax('get','/1.json', data=>{}, error=>{})
// // 前面函数是成功回调 后面函数是失败回调
// ajax('get', '/1.json',{
//     success: ()=>{},
//     fail:()=>{}
// })
// // 接受一个对象 对象有两个key表示成功和失败

// 不管是方法一还是方法二 都有问题
// 不规范 名称五花八门 有人用success+error 有人用success+fail 有人用done+fail
// 很容易出现回调地狱 代码变得看不懂
// 很难进行错误处理
// // 背下来 面试 
// 回调地狱举例
// getUser(user =>{
//     getGroups(user,(groups)=>{
//         groups.forEach((g)=>{
//             g.filter(x => x.ownerId === user.id)
//             .forEach(x => console.log(x))
//         })
//     })
// })

// 怎么解决回调问题
// 规范回调的名字或顺序
// 拒绝回调地狱 让代码可读性更强
// 很方便的捕获错误

// 1976年Danel P.Friedman 和 David Wise 
// 两人提出Promise思想
// 后人基于此发明了 Future Delay Deferred等
// 前端结合Promise和JS 制定了Promise/A+规范
// 该规范详细描述了Promise的原理和使用方法

// 以AJAX的封装为例
// 来解释Promise的用法
// ajax = (method, url, options)=>{
//     const {success,fail} = options // 解构赋值
//     // const success = options.success
//     // const fail = options.fail
//     const request = new XMLHttpRequest()
//     request.open(method,url)
//     request.onreadystatechange = ()=>{
//         if(request.readyState === 4){
//             // 成功就调用success 失败就调用fail
//             if(request.status < 400){
//                 success.call(null,request.response)
//             }else if(request.status >= 400){
//                 fail.call(null, request, request.status)
//             }
//         }
//     }
//     request.send()
// }
// ajax('get', '/xxx', {success(response){},fail:(request,status)=>{}})
// // 左边是function缩写 右边是箭头函数

// 改成Promise写法
// ajax('get','/xxx').then((response)=>{}, (request)=>{})
// 虽然也是回调
// 但是不需要记success和fail了
// then的第一个参数就是success
// then的第二个参数就是fail
// ajax()返回了一个含有.then()方法的对象

// ajax = (method, url) =>{
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest()
//         request.open(method, url)
//         request.onreadystatechange = () =>{
//             if(request.readyState === 4){
//                 // 成功就调用resolve 失败就调用reject
//                 if(request.status < 400){
//                     resolve.call(null, request.response)
//                 }else if(request.status >= 400){
//                     reject.call(null, request)
//                 }
//             }
//         }
//         request.send()
//     })
// }

// 第一步
// return new Promise((resolve,reject)=>{})
// 任务成功则调用resolve(result)
// 任务失败则调用reject(error)
// resolve和reject会再去调用成功和失败函数

// 第二步
// 使用.then(success,fail)传入成功和失败函数

// 我们封装的ajax的缺点
// post无法上传数据
// 不能设置请求头

// 以后直接用jQuery.ajax或者使用axios

// 总结
// 异步是什么
// 异步为什么会用到回调
// 回调有哪三个问题
// Promise是什么
// 如何使用Promise
// 如何使用Axios
