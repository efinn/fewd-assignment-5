
//wait for th DOM elements to load
$('document').ready(function() {
	
	$('#submit-btn').click(checkCity)

	function checkCity() {
  			//get city and make case insensitive			
  			var city = $('#city-type').val().toLowerCase()
  	}
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
	
 // If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg       
    if(city == 'nyc' || city == 'new york city' || city == 'new york') {
      $('body').attr('class','nyc');

    } 

    // If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
      $('body').attr('class','sf');
    }

    // If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }

    // If a user submits "Austin" or "ATX" make the background of the page austin.jpg
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg 
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});