$(document).ready(function(){
console.log("UpcomingHero succesfully loaded!");
//$(".left_section").remove();

var i = 0;
var skip = 0;
var skipuser = 0;
var uservotes = 0;
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
	}else{ return currentUser; }
}

function postMsg(msg){
	var message = msg;
	$("#chat-txt-message").val(message);
	var e = $.Event("keydown");
	e.which = 13;
	$("#chat-txt-message").trigger(e);
}

function sayhello(u){
	var user = u;
	var chatmsg = "Hello "+user+"!";
	console.log(chatmsg);
	postMsg(chatmsg);
}

function ping(){
	var chatmsg = "Pong!";
	postMsg(chatmsg);
}

function skip(){
	$(".skip-el").trigger("click");
	postMsg("Successful Vote. Video skipped!");
}

function voteskip(action){
	switch(action){
		case (action == "start"): 
			skipuser = getTotalUser();
			votedisabled = true;
			break;
		case (action =="end"): 
			if(skip > 0){skip(); uservotes = 0; skip = 0; skipuser = 0;}else{postMsg("Vote failed!"); uservotes = 0; skip = 0; skipuser = 0;}
			break;
		case (action == "yes"): 
			skip++; uservotes++;
			break;
		case (action == "no"): 
			skip--; uservotes++;
			break;
		default: 
			console.log("No Vote-Action");
			break;
	}
}

$('body').on('DOMNodeInserted', 'div.text', function () {
	var msg = getChatMessage($(this));
	var user = getChatUser($(this));

	if(!user == "Hero"){
		if(msg.search('!hello') >= 0){ sayhello(user); }
		if(msg.search('!ping') >= 0){ ping(); }
		if(msg.search('!voteskip') >= 0){ voteskip("start"); }
		if(msg.search('!skipyes') >= 0){ voteskip("yes"); }
		if(msg.search('!skipno') >= 0){ voteskip("no"); }
	}
	if(skipuser > 0 && uservotes > 0 && skipuser == uservotes){voteskip("end"); votedisabled = false;}

	});

})
