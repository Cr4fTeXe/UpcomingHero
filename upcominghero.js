$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	var i = 0;
	var currentUser = "";

	$('body').on('DOMNodeInserted', 'div.text', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));
		console.log("Message: "+msg);
		console.log("User: "+user);
	});

	function getChatMessage(msg){
		var amsg = msg;
		amsg = amsg.replace(amsg.children(".username").html(), '');
		return amsg.html();
	}
	function getChatUser(user){
		if(user.children(".username").html()){
			currentUser = user.children(".username").html();
			return user.children(".username").html();
		}else{
			return currentUser;
		}
	}
})
