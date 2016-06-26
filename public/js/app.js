var socket = io();

socket.on('connection', function() {
	console.log('connected to socket.io server!');
});	

socket.on('message',function(message) {
	var momentTimeStamp = moment.utc(message.timeStamp);
	console.log('New Message');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' + momentTimeStamp.local().format('h:mm a')+': </strong>'  + message.text  +'<p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});