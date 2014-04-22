var http = require('http'),
    streams = [],
    urls = process.argv.slice(2, process.argv.length), finished = 0;

// se agrean las urls a una cola
urls.forEach(function(url, index){
    streams.push({
        url : url,
	data : ""
    });

    http.get(streams[index].url, function(stream){
 	stream.on('data', function(chunk){
	    streams[index].data += chunk.toString();
        });
	stream.on('end', function(){
	    finished++;
	    if(finished === urls.length){
	    	streams.forEach(function(stream){
    	   	    console.log(stream.data);
       		});
	    }
	});
    }); 
    
});





