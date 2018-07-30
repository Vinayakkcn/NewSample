var express = require('express');
var app = express();

app.get('/', function(req,res){
res.send('Hello World');
});

app.listen(3000, function (){
console.log('Sample App is listening port 3000');
});



var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.listen(port, ip_address, function () {
  console.log( "Listening on " + ip_address + ", port " + port )
});


