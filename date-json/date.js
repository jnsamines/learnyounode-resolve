var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var server = http.createServer(function(request, response){
    var uri = url.parse(request.url, true);

    response.writeHead(200, {'Content-Type' : 'application/json'});
    var format = uri.query.iso,
		date = new Date(format);
	
    if(uri.pathname === '/api/unixtime'){
		var res = {
			unixtime : Number(date)
		};
		response.end(JSON.stringify(res));
    }

    if(uri.pathname === '/api/parsetime'){
		
		var res = {
			hour : date.getHours(),
			minute : date.getMinutes(),
			second : date.getSeconds()
		};
		response.end(JSON.stringify(res));
    }
}).listen(port);
console.log('Servidor iniciado en el puerto ' +  port);