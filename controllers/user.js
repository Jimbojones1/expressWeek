var express  = require('express');
var userCtrl = express.Router();


userCtrl.get('/something', function(req, res, next){

})

userCtrl.get('/', function(req, res, next){
  res.render('user', {})
})




userCtrl.post('/something', function(req, res, next){

})

userCtrl.post('/thisIsMyPostRoute', function(req, res, next){
    console.log(req.body, " this is req.body")
    res.send('im home')
})



module.exports = userCtrl
