var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/register' && method === 'POST'){
    response.setHeader('Content-Type','text/html; charset=utf-8')
    const userArray = JSON.parse(fs.readFileSync('./db/users.json').toString()) //读取数据库 获取id
    // response.end("GOOD")
    // 在上传数据时 数据可能很大 所以可能是分段上传的
    const array = []
    request.on('data', (chunk)=>{
        array.push(chunk)
    })
    request.on('end', ()=>{
        console.log(array)
        const string = Buffer.concat(array).toString()
        console.log(string)
        const obj = JSON.parse(string)
        console.log(obj.name, obj.password)
        const lastUser = userArray[userArray.length - 1] // 判断数据库是否为空
        const newUser = {
            // id 为最后一个用户的id + 1
            id : lastUser ? lastUser.id + 1 : 1,
            name : obj.name,
            password: obj.password
        }
        userArray.push(newUser)
        fs.writeFileSync('./db/users.json',JSON.stringify(userArray))
    })
    response.end()
  }else if(path === '/home.html'){
    const cookie = request.headers['cookie']
    if(cookie === undefined){
        const homeHtml = fs.readFileSync('./public/home.html').toString()
        const string = homeHtml.replace("{{loginStatus}}","未登录")
            .replace("{{user.name}}", '')
        response.write(string)
        response.end()
    }
    // console.log(cookie)
    // console.log(cookie.split(';').filter(s => s.indexOf('user_id')>=0)[0].split('=')[1])

    const session = JSON.parse(fs.readFileSync('./session.json').toString())
    let sessionId 
    try{
        sessionId = cookie.split(';').filter(s => s.indexOf('session_id')>=0)[0].split('=')[1]
    }catch(error){

    }
    if(sessionId && session[sessionId]){
        const userId = session[sessionId].user_id
        const userArray = JSON.parse(fs.readFileSync('./db/users.json').toString())
        const user = userArray.find(user => user.id === userId)
        const homeHtml = fs.readFileSync('./public/home.html').toString()
        let string = ''
        if(user){
            string  = homeHtml.replace("{{loginStatus}}", "已登录")
            .replace(`{{user.name}}`, user.name)
        }
        response.write(string)
    }else{
        const homeHtml = fs.readFileSync('./public/home.html').toString()
        const string = homeHtml.replace("{{loginStatus}}","未登录")
            .replace("{{user.name}}", '')
        response.write(string)
    }

    // let userId
    // try{
    //     userId = cookie.split(';').filter(s => s.indexOf('user_id')>=0)[0].split('=')[1]
    // }catch(error){ 

    // }
    // if(userId){
    //     const userArray = JSON.parse(fs.readFileSync('./db/users.json'))
    //     const user = userArray.find(user => user.id.toString() === userId)
    //     const homeHtml = fs.readFileSync('./public/home.html').toString()
    //     let string
    //     if(user){
    //         string = homeHtml.replace("{{loginStatus}}","已登录")
    //         .replace("{{user.name}}", user.name)
    //     }else{
           
    //     }
    //     response.write(string)
    // }else{
    //     const homeHtml = fs.readFileSync('./public/home.html').toString()
    //     const string = homeHtml.replace("{{loginStatus}}","未登录")
    //         .replace("{{user.name}}", '')
    //     response.write(string)
    // }

    

    // if(cookie === 'logined=1'){
    //     const homeHtml = fs.readFileSync('./public/home.html').toString()
    //     const string = homeHtml.replace('{{loginStatus}}', '已登录')
    //     response.write(string)
    // }else{
    //     const homeHtml = fs.readFileSync('./public/home.html').toString()
    //     const string = homeHtml.replace('{{loginStatus}}', '未登录')
    //     response.write(string)
    // }

    response.end('home')
  }else if(path === '/sign_in' && method === 'POST'){
    const userArray = JSON.parse(fs.readFileSync('./db/users.json').toString()) //读取数据库 获取id
    const array = []
    request.on('data', (chunk)=>{
        array.push(chunk)
    })
    request.on('end', ()=>{
        const string = Buffer.concat(array).toString()
        const obj = JSON.parse(string) // name password
        const user = userArray.find((user) =>{return user.name === obj.name && user.password === obj.password})
        console.log(user)
        if(user === undefined){
            response.setHeader('Content-Type','text/json; charset=utf-8')
            console.log('failed')
            response.statusCode = 400
            response.end(`{"errorCode": 400}`)
        }else{
            response.statusCode = 200
            // response.setHeader('Set-Cookie', 'logined=1; HttpOnly') //  前端可以通过document.cookie修改 HttpOnly不准前端碰Cookie 
            // response.setHeader('Set-Cookie', `user_id=${user.id}; HttpOnly`)
            const random = Math.random()
            const session = JSON.parse(fs.readFileSync('./session.json').toString())
            console.log(session)
            session[random] = {user_id:user.id}
            fs.writeFileSync('./session.json', JSON.stringify(session))
            response.setHeader('Set-Cookie', `session_id=${random}; HttpOnly`)
            response.end()
        }
    })
  }
  else{
    response.statusCode = 200
  
  const filePath = path === '/' ? '/index.html' : path // 默认首页
  const index = filePath.lastIndexOf('.')
  const suffix = filePath.substring(index)
  const fileTypes = {
      '.html' : 'text/html',
      '.css' : 'text/css',
      '.js' : 'text/javascript',
      '.png' : 'image/png',
      '.jpg' : 'image/jpeg'
  }
  response.setHeader('Content-Type', `${fileTypes[suffix] || 'text/html'};charset=utf-8`)
  let content
  try{ //处理路径不存在的报错
      content = fs.readFileSync(`./public${filePath}`)
  }catch(error){
      content = '你想透的药娘不存在'
      response.statusCode = 404
  }
  response.write(content)
  response.end()
  }

  
  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)
