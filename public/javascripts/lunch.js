


$.ajax({
  url: '/food/lunchApiRouteCall',
  type: 'get',
  dataType: 'json',
  success: function(data){
    console.log(data)
    var list = $('<ul></ul>').appendTo('body');

    for (var property in data){
      console.log(property, data[property])
      $(list).append('<li>' + data[property] + '</li>')
    }
  },
  error: function(err){
    console.log(err)
  }
})
