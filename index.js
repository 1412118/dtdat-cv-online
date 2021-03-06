var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function(){
	console.log('Server listenning on port ' + port);
});