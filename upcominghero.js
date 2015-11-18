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
		console.log("amsg: "+amsg);
		amsg = amsg.replace(amsg.children(".username").html(), '');
		console.log("amsg2: "+amsg);
		console.log("amsghtml: "+amsg.html());
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
