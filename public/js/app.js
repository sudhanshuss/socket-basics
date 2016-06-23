var socket = io();

socket.on('connection', function() {
	console.log('connected to socket.io server!');
});	

socket.on('message',function(message) {
	console.log('New Message');
	console.log(message.text);
});