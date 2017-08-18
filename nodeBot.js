const twit    = require('twit'),
      config  = require('./config.js'),
      Twitter = new twit(config);

// Retweet Node Bot
const retweetNode = function() { 
	// Find latest tweet according to the 'q' query in params	
	const params = {
    	q: '#nodejs', // Required
    	count: 5,
    	geocode: '52.520007,13.404954,30mi',
    	result_type: 'recent',
    	lang: 'en'    
  	}

	Twitter.get('search/tweets', params, (err, data) => {
  		// If no errors
  		if(!err) {
  			// Loop through tweets and post them
  			for(i = 0; i < data.statuses.length; i++) {
  				//Grab ID of tweet to retweet
  				let retweetId = data.statuses[i].id_str;
  				// Tell Twitter to retweet
  				Twitter.post('statuses/retweet/:id', {
  					id: retweetId
  				}, (err, response) => {
  					if(response) {
  						console.log(`NODE BOT Retweeted post # ${retweetId}`);
  					}
  					// If error while retweeting
  					if (err) {
  						console.log(`NODE BOT couldn't retweet post # ${retweetId}`);
  					}
  				})
  			}
  		}
  		// If unable to search a tweet
  		else {
  			console.log('NODE BOT failed while searching...')
  		}
	})
}

module.exports = retweetNode;
