//Require express - gives bac ka function
var express =  require('express');

var app = express();

var port = 5000;

app.use(express.static('server/public'));

app.listen(port, function(){
console.log('listening on port' , port);

});