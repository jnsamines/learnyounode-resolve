var files = require('./files');

var filename = process.argv[2],
    ext = process.argv[3];

files(filename, ext, function(err, files){
    if(err){
	console.log(err);
	return;
    }
    
    files.forEach(function(file){
    	console.log(file);
    });

});