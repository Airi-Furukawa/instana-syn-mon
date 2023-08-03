let express = require('express');
let router = express.Router();


router.get('/', function(req, res, next) {
  let param = {"値":"GETのサンプルです。テキストを返すだけ。"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});


router.get('/hello', function(req, res, next) {
  let param = {"result":"Hello World!"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

router.post('/hello', function(req, res, next) {
  var r = Math.floor(Math.random() * 11);
  if (r <= 2) {
    res.status(500);
    res.end('たまにエラーを起こしています');
  }

  greet = "hello, " + req.body.name + "!"
  var param = {"restext":greet};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});


module.exports = router;
