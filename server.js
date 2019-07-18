var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', function(req,res){
  res.send('Hello World');
})

app.get('/store', function(req,res){
  res.send('To jest sklep');
});

app.use(function(req, res, next){
  console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
  next();
});

app.listen(3000);
app.use(function(req,res,next){
  res.status(404).send('Nie mogliśmy odnaleźć tego czego żądasz');
});
