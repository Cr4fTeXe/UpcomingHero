$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	var i = 0;
	var oldMessages = [];

	$('body').on('DOMNodeInserted', 'div.text p', function () {
		getChatMessage($(this));
	});

	function getChatMessage(msg){
		var message = msg.html();
		console.log(message);
	}
})
