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

		var request = new XMLHttpRequest();
		request.open('POST', 'https://api.dubtrack.fm/chat/upcoming');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};
		var body = "message={"+chatmsg+"}";
		request.send(body);
		
		}

	$('body').on('DOMNodeInserted', 'div.text', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));

		if(msg.search('!hello') >= 0){ sayhello(user);}

		console.log("Message: "+msg);
		console.log("User: "+user);
	});

})
