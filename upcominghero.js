$(document).ready(function(){
console.log("UpcomingHero succesfully loaded!");
//$(".left_section").remove();

var i = 0;
var skip = 0;
var skipuser = 0;
var uservotes = 0;
var currentUser = "";
var votedisabled = true;

//Functions
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
function getTotalUser(){ return $(".room-user-counter").html(); }
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
	postMsg(chatmsg);
	}
function ping(){
	var chatmsg = "Pong!";
	postMsg(chatmsg);
	}
function yolo(){
	var chatmsg = "Swag";
	postMsg(chatmsg);
	}
function fb(){
	var chatmsg = "Make sure to like us on Facebook! https://www.facebook.com/UpcomingRecords";
	postMsg(chatmsg);
	}
function dubx(){postMsg("Make sure to use the DubX-Extension and to activate the Community-Theme option. Get the extension here: https://dubx.net/");}
function skipvideo(vote){
	var vot = vote;
	$(".skip-el").trigger("click");
	if(vot = "vote"){ postMsg("Successful Vote. Video skipped!"); }
	}
function votedisabledfalse(){ votedisabled = false;}
function voteskip(act){
	var action = act;
	if(act == "start" && votedisabled == false){
		skipuser = getTotalUser();
		skipuser = parseInt(skipuser);
		postMsg('Voteskip started! Type "!voteyes" or "!voteno".');
	}else{
		if(act == "end"){
			if(skip > 0){ uservotes = 0; skip = 0; skipuser = 0; votedisabled = true; skipvideo("vote");}else{ uservotes = 0; skip = 0; skipuser = 0; votedisabled = true; postMsg("Vote failed!");}
		}else{
			if(act == "yes" && votedisabled == false){
				var alle = getTotalUser();
				skip++; uservotes++;
				postMsg(uservotes+" out of "+alle+" voted.");
			}else{
				if(act == "no" && votedisabled == false){
					skip--; uservotes++;
					var alle = getTotalUser();
					postMsg(uservotes+" out of "+alle+" voted.");
				}else{
					console.log("No Vote-Action");
				}
			}
		}
	}
	}
function mehskip(){
	var woot = $('.dubup > .dub-counter').html();
	var meh = $('.dubdown > .dub-counter').html();
	if(meh > woot && meh != 0){postMsg("Enough DubDowns. Video will be skipped!"); skipvideo();}else{postMsg("Not enough DubDowns. Video won't be skipped!");}
	}
function love(){postMsg(":heart: Love is in the Air :heart:");}
function hardwareinfo(){postMsg("This bot runs on the Raspberry Pi of Cr4fTeXe.");}
function joinQueue(){ $(".play-song-link").trigger("click"); $(".close-browser").trigger("click");}
function pauseQueue(){ $(".display-browser").trigger("click"); $(".pause-queue").trigger("click"); $(".close-browser").trigger("click");}
function resumeQueue(){ $(".display-browser").trigger("click"); $(".pause-queue").trigger("click"); $(".close-browser").trigger("click");}
function queuePlaylist(){ $(".display-browser").trigger("click"); $(".playlist_icon").trigger("click"); $(".queue-playlist").trigger("click"); $(".close-browser").trigger("click"); }

$(".dubup").on("change",".dub-counter", function(){mehskip();})
$(".dubdown").on("change",".dub-counter", function(){mehskip();})

$(".sec").on("change", function(){ if(parseInt($(".min").html()) > 12){postMsg("Video skipped, because it was too long!"); skip();}})

//Command-Input
$('body').on('DOMNodeInserted', 'div.text', function () {
	var rank = $(this).parent().parent().parent().attr("class");
	var userrank = "";
	var staff = false;
	var votedisabled = false;

	if(rank.search('isMod') >= 0){userrank = "Mod"; staff = true;}
	if(rank.search('isVIP') >= 0){userrank = "VIP";}
	if(rank.search('isManager') >= 0){userrank = "Manager"; staff = true;}
	if(rank.search('isCo-owner') >= 0){userrank = "Co-owner"; staff = true;}
	if(rank.search('isResident-dj') >= 0){userrank = "Resident-dj";}
	if(rank.search('isOwner') >= 0){userrank = "Owner"; staff = true;}

	var msg = getChatMessage($(this));
	var user = getChatUser($(this));
	var commandlist = "!love, !hardwareinfo, !hello, !yolo, !ping, !fb, !dubx, !racist, !mehskip, !voteskip, !voteyes, !voteno, !commands";
	var staffcommandlist = "!skip, !queuePlaylist, !joinQueue, !pauseQueue, !resumeQueue";

	if(skipuser > 0 && uservotes > 0 && skipuser == uservotes){ votedisabled = true; voteskip("end");}

	if(user != "hero"){
		if(msg.search('!love') >= 0 || msg.search('love') >= 0 || msg.search(':heart:') >= 0 || msg.search('<3') >= 0){ love(); }
		if(msg.search('!hardwareinfo') >= 0){ hardwareinfo(); }
		if(msg.search('!hello') >= 0){ sayhello(user); }
		if(msg.search('!yolo') >= 0){ yolo(); }
		if(msg.search('!ping') >= 0){ ping(); }
		if(msg.search('!fb') >= 0){ fb(); }
		if(msg.search('!dubx') >= 0){ dubx(); }
		if(msg.search('!racist') >= 0 || msg.search('nigger') >= 0 || msg.search('niggur') >= 0 || msg.search('neger') >= 0 || msg.search('obama') >= 0 ){ postMsg('https://i.ytimg.com/vi/3AzfIhs2-zo/hqdefault.jpg'); }
		if(msg.search('!mehskip') >= 0){ mehskip(); }
		if(msg.search('!voteskip') >= 0){ votedisabledfalse(); voteskip("start"); }
		if(msg.search('!voteyes') >= 0){ voteskip("yes"); }
		if(msg.search('!voteno') >= 0){ voteskip("no"); }
		if(msg.search('!skip') >= 0 && staff == true){ skipvideo(); }
		if(msg.search('!queuePlaylist') >= 0 && staff == true && user == "cr4ftexe"){ queuePlaylist(); }
		if(msg.search('!joinQueue') >= 0 && staff == true){ joinQueue(); }
		if(msg.search('!pauseQueue') >= 0 && staff == true){ pauseQueue(); }
		if(msg.search('!resumeQueue') >= 0 && staff == true){ resumeQueue(); }
		if(msg.search('!staffcommands') >= 0 && staff == true){ postMsg(staffcommandlist); }
		if(msg.search('!commands') >= 0){ postMsg(commandlist); }
	}

	});

})
