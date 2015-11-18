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
		var amsgchild = amsg.children(".username").html();
		console.log("amsgchild: ");
		console.log(amsgchild);
		var amsghtml = amsg.html().replace(amsgchild, '');
		console.log("amsghtml: ");
		console.log(amsghtml);
		return amsghtml;
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
