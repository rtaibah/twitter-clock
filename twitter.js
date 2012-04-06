function getTweets(tweets){
//        console.log(website);
        $.getJSON('https://api.twitter.com/1/statuses/home_timeline.json?include_entities=true', function(data){
				var tweets = new Array( );
				
//                console.log(data);
                jsonresponse = data;    
                $.each(jsonresponse.results, function(index, results) {

                        var str = results.text;		       
//                        console.log(str);       
                        tagSet = tagSet.concat(str);

                });


};
                
$(document).ready(function() {
        $("#getTweets").submit(function(event) {
//                event.preventDefault();
               alert(str);
                                
         

		               
                event.preventDefault();				
        });
});