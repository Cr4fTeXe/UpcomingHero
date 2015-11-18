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
		var amsgchild = amsg.children(".username");
		var amsghtml = amsg.html();
		var amsgchildhtml = amsgchild.html();

console.log("amsgchildhtml: ");
console.log(amsgchildhtml);
console.log("amsgchild: ");
console.log(amsgchild);


		amsghtml = amsghtml.replace(amsgchildhtml, '');

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
