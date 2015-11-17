$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	var i = 0;
	var oldMessages = [];

	$('body').on('DOMNodeInserted', 'div.text p', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));
		console.log(msg + "    " + user);
	});

	function getChatMessage(msg){
		msg = msg.children(".username").remove();
		return msg.html();
	}
	function getChatUser(user){
		return user.children(".username").html();
	}
})
