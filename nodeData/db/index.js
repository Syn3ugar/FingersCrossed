const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'temperature'
})
//数据连接创建号
conn.connect();

module.exports=conn
