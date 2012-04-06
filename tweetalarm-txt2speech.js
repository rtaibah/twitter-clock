/***
*	This file contains javascript functions specfic to our
*	tweetalarm mobile app.
*
*	File: tweetalarm-txt2speech.js
*	Description:
*	Javascript functions specific to reading a tweet out loud.
*/
var tweet = ""
var tweetA = "";
var tweetB = ""; 
var speech;
var tweetCounter = 0;
var tweetChar = 99;

function parseTweet() {
  console.log('in parseTweet, tweetCounter at: '+tweetCounter);
	if (tweetCounter > 0){
    speech.removeEventListener('ended', parseTweet, false);
	}
	if (tweetCounter < twitter_response.length) {
		tweet = twitter_response[tweetCounter].screenname + " says " + twitter_response[tweetCounter].text;
		$("#tweet").html(tweet);
		tweetChar = 99;
		if (tweet.length > 99) {
			while(tweet.charAt(tweetChar) != ' ') { tweetChar = tweetChar -1; }
		} else {
			tweetChar = tweet.length;
		}
		tweetA = tweet.trim().substring(0,tweetChar);
		cleanUrl = prepURL(tweetA);
		if(tweetCounter > 0) {
		  speech.setAttribute('src', cleanUrl);
		} else {
		  speakTheTweet(cleanUrl);
	  }
		tweetB = "";
		tweetCounter += 1;
	}
}

function prepURL(message) {
	var url = "audio_proxy.php?tweet="
	cleanMsg = message.replace(/\s/g,'+');
	cleanMsg = cleanMsg.replace(/#/g, '');
	cleanMsg = cleanMsg.replace(/"/g, '');
	cleanMsg = cleanMsg.replace(/@/g, '');
	return url + cleanMsg;
}

function handlerFunction(e) {
  // console.log(e.srcElement.currentTime);
  if(speech.duration < 100) {
    if (e.srcElement.currentTime == speech.duration) {
      // console.log('done now');
      if ((tweet.length > 99) && (tweetB == "")) {
        playNext();
      } else {
        parseTweet();
      }
    } else {
      // console.log('still playing');
    }
  } else { // all other browsers (chrome)
    if (e.srcElement.currentTime > 30) {
      // console.log('done now');
      if ((tweet.length > 99) && (tweetB == "")) {
        playNext();
      } else {
        parseTweet();
      }
    } else {
      // console.log('still playing');
    }
  }
}

function playNext() {
  // console.log('play b part')
	tweetB = tweet.trim().substring(tweetChar);
	cleanURLb = prepURL(tweetB);
	// change src on audio
	speech.setAttribute('src', cleanURLb);
}

function speakTheTweet(cleanUrl) {
	// change body selector to actual speech placeholder
	$('#tweetAudio').html('<audio id="speech" autoplay="autoplay" controls="controls"><source src="'+cleanUrl+'" type="audio/mpeg" /></audio>');
	speech = document.getElementById('speech');	
	// workaround for HTML5 duration infinity bug in audio element
  speech.addEventListener('timeupdate', handlerFunction, false);

}