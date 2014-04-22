var http = require('http'),
    url = process.argv[2];

http.get(url, function(stream){
    stream.setEncoding('utf-8');
    stream.on('data', function(data){
    	console.log(data);
    });
});