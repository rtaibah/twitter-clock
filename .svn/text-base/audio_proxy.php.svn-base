<?php
header('Content-Type: audio/mpeg');
header('Accept-Ranges: bytes');

$voice = file_get_contents('http://translate.google.com/translate_tts?tl=en&q='.urlencode($_GET['tweet'])); 
print $voice;
