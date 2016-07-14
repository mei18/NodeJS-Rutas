var http = require('http');
var Router = require('node-router');

var router = Router();
var route = router.push;

route('GET','/uno', function (request,response){
	console.log('llamada al /uno');
	//200 = ok
	response.send(200,'Hola mundo de rutas!');
});

route('GET','/dos', function (request,response){
	console.log('llamada al /dos');
	response.send(500,'Error!');
});

var server = http.createServer(router);
server.listen(8080, function(){
	console.log('Server OK');
}); 