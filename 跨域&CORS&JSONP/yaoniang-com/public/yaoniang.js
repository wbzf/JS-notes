// // console.log('yaoniang')
// const request = new XMLHttpRequest()
// // request.open('GET','http://qq.com:8888/friends.json')
// // request.open('GET','https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1-edb203c114.10.2.js')
// request.onreadystatechange = () =>{
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.response)
//     }
// }
// request.send()
// CORS结束


const random = 'yaoniangJSONPCallbackName' + Math.random()
console.log(random)
window[random] = (data)=>{
    console.log(data)
}
// window.xxx = (data)=>{ //定义xxx函数
//     console.log(data)
// }
const script = document.createElement('script')
// script.src = 'http://qq.com:8888/friends.js' // 加载并执行
script.src = `http://qq.com:8888/friends.js?callback=${random}`
// script.onload = () =>{//监听是否成功拿取数据
//     console.log(window.xxx)
// }
script.onload = ()=>{
    script.remove() // 执行完后删掉标签 防止标签变多
}
document.body.appendChild(script)


// 封装jsonp

function jsonp(url){
    return new Promise((resolve, reject) => {
        const random = 'yaoniangJSONPCallbackName' + Math.random()
        window[random] = (data) =>{
            // console.log(data)
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}

jsonp('http://qq.com:8888/friends.js').then((data)=>{
    console.log(data)
})