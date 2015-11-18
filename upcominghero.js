$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");
	//$(".left_section").remove();

	var i = 0;
	var currentUser = "";

	function getChatMessage(msg){
		var amsg = msg;
		var user = amsg.children().children(".username").html();
		var amsghtml = amsg.html(); //Message
		amsghtml = amsghtml.replace("<p>","");
		amsghtml = amsghtml.replace("</p>"," ");
		amsghtml = amsghtml.replace('<a href="#" class="username">'+user+'</a>', '');
		return amsghtml;
		}
	function getChatUser(user){
		var user = user;
		if(user.children().children(".username").html()){
			currentUser = user.children().children(".username").html();
			return user.children().children(".username").html();
		}else{
			return currentUser;
		}
		}

	function sayhello(u){
		var user = u;
		var chatmsg = "Hello "+user+"!";
		$.post('https://api.dubtrack.fm/chat/upcoming', { 'message': chatmsg, 'token': '845a3560186a36ef6dc48e3946a7ba944ef3e0578b14ddbc94d30d9c4bded4bd418a8e7db786c2d6523badb0e035411e' });
		}

	$('body').on('DOMNodeInserted', 'div.text', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));

		if(msg.search('!hello') >= 0){ sayhello(user);}

		console.log("Message: "+msg);
		console.log("User: "+user);
	});

})
