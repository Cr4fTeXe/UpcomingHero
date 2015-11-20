$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");
	$(".left_section").remove();

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
function postMsg(msg){
  var message = msg;
  //$(".chatinout").val() = message;
  //$(".chatbutton").trigger("click");
}
	function sayhello(u){
		var user = u;
		var chatmsg = "Hello "+user+"!";
		postMsg(chatmsg);
		}
		
	function ping(){
		var chatmsg = "Pong!";
		postMsg(chatmsg);
		}

	$('body').on('DOMNodeInserted', 'div.text', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));
if(!user == "Hero"){
		if(msg.search('!hello') >= 0){ sayhello(user);}
		if(msg.search('!ping') >= 0){ ping();}
		}
		console.log("Message: "+msg);
		console.log("User: "+user);
	});

})
