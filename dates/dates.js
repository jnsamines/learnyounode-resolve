var net = require('net'),
    port = process.argv[2];


function fillzero(content, spaces){
   content = content.toString();
   if(content.length < spaces)
	content = fillzero("0" + content, spaces);

   return content;
}

var server = net.createServer(function(socket){
    var date = new Date(),
	server_date = fillzero(date.getFullYear(),4) + "-" + fillzero(Number(date.getMonth() + 1), 2)  + "-" + fillzero(date.getDate(), 2),
	server_time = fillzero(date.getHours(), 2) + ":" + fillzero(date.getMinutes(),2);

    socket.end(server_date + " " + server_time);
}).listen(port);