/* 
数据库实例
*/
const mysql = require('mysql')
/* 
创建数据库实例
*/
const db = mysql.createConnection({
  // 主机地址
  host: '127.0.0.1',
  // 连接数据库信息
  user: 'root',
  password: '12345678',
  database: 'node',
  // 连接超时时间--毫秒 tcp
  connectTimeout: 10000,
})

/* 
结果封装promise
*/
module.exports = sql => {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => {
      if(!err){
        resolve(res)
      }else{
        reject(err)
      }
    })
  })
}

/* 
操作数据库
query 查询操作--需要封装为promise
*/
// db.connect((error, res) => console.log(error, res))

/* 
Test
*/
// db.query('select * from users', (err, res) => {
//   if(!err){
//     console.log(res);
//   }
// })

