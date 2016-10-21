var express = require('express');
var app     = express();
var bodyParser = require('body-parser');


//Before any routes are defined/ which means your controllers
app.use(bodyParser.json()); // supports json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));  // support encoded bodies

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))


// require controllers below static
app.use('/food', require('./controllers/food'));
app.use('/user', require('./controllers/user'));

app.listen(3000, function(){
  console.log('server is running')
})
