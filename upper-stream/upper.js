var http = require('http'),
    port = process.argv[2];


var server = http.createServer(function(request, response){
    var result = '';
    request.on('data', function(data){
    	result += String(data);
    });

    request.on('end', function(){
	response.end(new Buffer(result.toUpperCase()));
    });
}).listen(port);