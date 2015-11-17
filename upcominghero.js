$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	$('body').on('DOMNodeInserted', 'div.text p', function () {
      		getChatMessage($(this));
	});

	function getChatMessage(msg){
		var message = msg.html();
		console.log(message);
	}
})
