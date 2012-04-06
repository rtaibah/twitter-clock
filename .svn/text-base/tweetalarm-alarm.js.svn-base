/***
*	This file contains javascript functions specfic to our
*	tweetalarm mobile app.
*
*	File: tweetalarm-alarm.js
*	Description:
*	Javascript functions specific to alarm activities.
*	Ex. setting the alarm, getting the current time, 
*	triggering the alarm, etc
*/

var results;
var d;

/***
*	setAlarm(): function sets the alarm using a component picker.
*	- uses the spinningwheel-min.js library
*	- idea for these functions was borrowed from 
*	http://cubiq.org/spinning-wheel-on-webkit-for-iphone-ipod-touch
*   (see index_orig.html for more examples of how to use cubiq's 
*	component picker code.)
*/

function setAlarm() {
	var hour = { };
	var min = { };
	var ampm = {0: 'AM', 1: 'PM'};
	
	for( var i = 1; i < 13; i += 1 ) {
		hour[i] = i+'';
	}
	for( var i = 0; i < 60; i += 1 ) {
		// adding an empty string to the variable turns int to string
		if (i<10) {
			// add a leading 0
			min[i] = '0'+i;
		} else {
			min[i] = i+'';
		}
	}
	
	// pre-populate the spinny wheel with the previous alarm_time set
	// if there is no previous alarm_time, just set it to the current time
	var hour_preset, min_preset, ampm_preset;
	curr_alarm = $("#alarm").text();
	if (curr_alarm=="None") {
		curr_raw_time = new Date().strftime("%I:%M:%S %p");
		curr_raw_time_remove_seconds = curr_raw_time.slice(0,5) + ":" + curr_raw_time.slice(9);
		curr_raw_time_array = curr_raw_time_remove_seconds.split(":");
		// the parseInt(parseFloat()) is kind of a hack, but necessary for getting the correct digits
		// when the digit is a single value (ie 0-9)
		hour_preset = parseInt(parseFloat(curr_raw_time_array[0]));
		min_preset = parseInt(parseFloat(curr_raw_time_array[1]));
		if (curr_raw_time_array[2]=='AM') {
			ampm_preset = 0;
		} else {
			ampm_preset = 1;
		}
	} else {
	    curr_alarm_remove_spaces = curr_alarm.slice(0,4) + ":" + curr_alarm.slice(5);
		curr_alarm_array = curr_alarm_remove_spaces.split(":");
		hour_preset = parseInt(parseFloat(curr_alarm_array[0]));
		min_preset = parseInt(parseFloat(curr_alarm_array[1]));
		console.log("min_preset: "+min_preset);
		if (curr_alarm_array[2]=='AM') {
			ampm_preset = 0;
		} else {
			ampm_preset = 1;
		}
	}

	console.log('hour_preset: '+hour_preset);
	console.log('min_preset: '+min_preset);
	console.log('ampm_preset: '+ampm_preset);

	SpinningWheel.addSlot(hour, 'right', hour_preset);
	SpinningWheel.addSlot(min,'', min_preset);
	SpinningWheel.addSlot(ampm, 'right', ampm_preset);
	
	SpinningWheel.setCancelAction(cancel);
	SpinningWheel.setDoneAction(done);
	
	SpinningWheel.open();
}

// setAlarm helper function
function done() {
	results = SpinningWheel.getSelectedValues();
	document.getElementById('alarm').innerHTML = results.values[0] + ':' + results.values[1] + ':00 ' + results.values[2];
}

// setAlarm helper fuction
function cancel() {
	document.getElementById('alarm').innerHTML = 'cancelled!';
}
window.addEventListener('load', function(){ setTimeout(function(){ window.scrollTo(0,0); }, 100); }, true);


/***
*	getTime(): function that gets and sets the current time.
*	- uses the strftime library
* 	- is called periodically using the setInterval() function
*	supplied by the jquery library
*/

function getTime() {
	date = new Date().strftime("%I:%M:%S %p");
	// remove leading 0 if hour is a single digit
	hour = parseFloat(date.slice(0,2));
	if (hour<10) {
		date = date.slice(1)
	}
	$("#current_time").text(date);
}
var intervalTime = setInterval(getTime, 1000); // milliseconds


/***
*	triggerAlarm(): function that triggers an alarm when
*	the current time is equal to the alarm time.
*/

function triggerAlarm() {
	current_time = $("#current_time").text();
	alarm_time = $("#alarm").text();
	// remove the seconds when doing comparison
  // current_time_no_sec = current_time.slice(0,5)+current_time.slice(8,11);
	if (alarm_time==current_time) {
    // alert("ring");
    if (typeof twitter_response != 'undefined') {
			parseTweet();
		}
	} else {
		// not the right time yet! do nothing.
	}
}
var intervalAlarm = setInterval(triggerAlarm, 1000); // milliseconds
