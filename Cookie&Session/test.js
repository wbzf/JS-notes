const fs = require('fs') //文件读取

// 读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
console.log(typeof usersString)
console.log(usersString)

const usersArray = JSON.parse(usersString)
console.log(usersArray instanceof Array)
console.log(usersArray)

// 写数据库
const user3 = {id:3, name:'药娘3', password: '123456', age: 19}
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)
