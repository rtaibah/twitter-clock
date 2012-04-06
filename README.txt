Tweet Alarm
A mobile-web app alarm clock, that reads off current tweets from your twitter
home_timeline (https://dev.twitter.com/docs/api/1/get/statuses/home_timeline)
when the alarm is triggered.

Team Members:
Each of us had a hand in every part of the app.  I've highlighted the areas
that each of us sort of concentrated in individually.
Emily Barabas - text to speech feature
Iris Cheung - alarm clock feature
Rami Taibah - oAuth, get Twitter feed feature

Demo Instructions:

1) Visit one of the following url's using an IPhone w/ IOS 4.0 or greater.
http://ramitaibah.com/tclock/index.php
http://www.iristhinks.com/iolab/index.php
2) Touch the clock to set the alarm time.
3) Wait for time to match the alarm time.
4) Notice that a tweet is displayed on the screen and an audio controller
has been added to the screen.
5) Click the play button on the audio controller to hear each tweet that
is in your feed, spoken one at a time.

Issues and things we wish we had more time to fix:
- Time-picker does not work on a browser, and only works on a mobile device.
- Tweets are populated and stored in a javascript array on the page upon
user authentication and not grabbed upon alarm trigger, this means that the
tweets gathered are more stale than we would like.
- Autoplay of video and audio is disabled for IOS 4.x and above.
(http://stackoverflow.com/questions/3009888/autoplay-audio-files-on-an-ipad-with-html5) 
this put a damper on our idea of 'autoplaying' tweets upon alarm trigger.


