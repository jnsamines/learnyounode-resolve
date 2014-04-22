var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var server = http.createServer(function(request, response){
    var uri = url.parse(request.url);

    if(uri.pathname === '/api/unixtime'){
	
    }

    if(uri.pathname === "/api/parsetime"){
    	
    }



}).listen(port);