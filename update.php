

<head>
<a href="http://twitter.com/logout">sign out</a>
</head>
<body>
<?php $_SESSION['twitter_profile']; ?>
<div id="form"><!--Start form-->
<p style="float:left;"><?php echo $username ?></p>
<p><?php echo "<img src='$profilepic' />" ?></p>
<p><?php echo $hometimeline ?></p>
<form method='post' action='index.php'>
</form>
</div><!--End Form-->

<p id="tweet"></p>


</body>
</html>
 
