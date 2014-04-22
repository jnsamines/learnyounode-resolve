var fs = require('fs'),
    path = require('path'),
    files = [];


module.exports = function(dirname, ext, callback){
    fs.readdir(dirname, function(err, list){
    	if(err)
	    return callback(err, null)
	
	list.forEach(function(element){
	    if(path.extname(element) === "." + ext){
	    	files.push(element);
 	    }
	});
	
	callback(null, files);
    });    
};

