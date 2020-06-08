console.log('女装 女装 女装')

getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    // request.onload = ()=>{
    //     console.log(request.response) // 请求的响应
    //     console.log('success')

    //  // 创建style标签
    //    const style = document.createElement('style')
    //  // 填写style内容
    //    style.innerHTML = request.response
    //  // 插到头里面
    //    document.head.appendChild(style)
    // }
    // request.onerror = ()=>{
    //     console.log('failed')
    // }
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4){
            console.log('下载完成') // 下载完成但不知道是成功 2xx 还是失败 4xx 5xx
            console.log(request.status)
            if(request.status >= 200 && request.status < 300){
                const style = document.createElement('style')

                style.innerHTML = request.response
        
                document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
        }
    }
    request.send()
    // console.log(request.response)
    // setTimeout(()=>{
    //     console.log(request.response)
    // },3000)
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        console.log(request.response)

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script) 
    }
    request.onerror = ()=>{} //报错不支持
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        console.log(request.response)

        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = ()=>{}
    request.send()
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4 && request.status === 200){
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json' )
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const object = JSON.parse(request.response) // 把符合json语法的字符串变成对应的对象或者其他东西 true
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`) 
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li) 
            });
            n += 1
        }
    }
    request.send()
}