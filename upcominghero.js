$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	var i = 0;
	var oldMessages = [];

	$('body').on('DOMNodeInserted', 'div.text', function () {
      getChatMessage($(this));
	});

	function getChatMessage(msg){
		var message = msg.html();
		oldMessages.push(message);
		while(i<oldMessages.length){
			if(message.search(oldMessages[i]) >= 1){
				message.replace(oldMessages[i], '');
			}
			i++;
		}



		console.log(message);
	}
})
