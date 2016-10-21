var express = require('express');
var ctrl    = express.Router();

//  In the layout I want you to create Header and a footer
// that pertains to food

ctrl.get('/breakfast', function(req, res, next){
  res.render('breakfast', {fruit: 'canteloupe'})
})

ctrl.get('/lunchApiRouteCall', function(req, res, next){
  // render json with five properties
  var lunch = {
    sandwhich: 'grilled cheese',
    fries: 'sweet potato',
    drink: 'water',
    soup: 'hottt',
    pepper: 'in the soup'
  }

  res.json(lunch)
})

ctrl.get('/lunch', function(req, res, next){
  // this will render a view called lunch
  // this view will have its own javascript
  // that makes an api call to our lunch router and
  // renders the data on the page
  // Do I need jquery?
  res.render('lunch', {})

})

ctrl.get('/dinner', function(req, res, next){
  res.render('dinner', {})
})







module.exports = ctrl;

