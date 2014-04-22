var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = process.argv[3];

fs.readdir(dir, function(err, list){
    for(var d = 0; d <= list.length - 1; d++){
    	var dir = list[d],
	    file_ext = path.extname(dir);

	if(file_ext.substring(1, file_ext.length ) === ext)
	    console.log(dir);
    }
});
