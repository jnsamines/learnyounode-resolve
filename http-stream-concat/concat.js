var http = require('http'),
    url = process.argv[2];

http.get(url, function(stream){
    var alldata = "";
    stream.setEncoding('utf-8');
    stream.on('data', function(data){
    	alldata += data;
    });

    stream.on('end', function(){
    	console.log(alldata.length);
	console.log(alldata);
    });
});