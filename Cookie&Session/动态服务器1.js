// 动态服务器

// 静态服务器和动态服务器区别
// 判断依据
// 是否请求了数据库
// 没有请求数据库 就是静态服务器
// 请求了数据库 就是动态服务器

// 讲不了数据库 用json文件替代数据库


// /db/user.json 
// 结构 一个数组
// [
//     {"id":1, "name":"药娘1", "password":"***"},
//     {"id":2, "name":"药娘2", "password":"***"}
// ]

// 读取users数据
// 先fs.readFileSync('./db/users.json').toString()
// 然后JSON.parse 一下(反序列化) 得到数组

// 存储users数据
// 先JSON.stringify 一下(序列号) 得到字符串
// 然后fs.writeFileSync('./db/users/json',data)