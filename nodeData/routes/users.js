var express = require('express');
var router = express.Router();
const conn = require('../db');

//获取所有用户信息
router.get('/', function (req, res, next) {
  conn.query('select* from user', function (err, r) {
    if (err) throw err;
    // r.forEach((element,i) => {
    //   conn.query(`update user set picture='/images/${i+1}.jpg' where username=?`
    //     , element.username)
    // });
    conn.query('select * from user', function (err, ret) {
      if (err) throw err
      res.send(ret)
  })
  })
  // conn.query('select* from user where username=? and password=?',
  //   [req.query.username, req.query.password], function (err, r) {
  //     if (err) throw err
  //     res.send(r)
  //   })
});

module.exports = router;
