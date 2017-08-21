const twit    = require('twit'),
      config  = require('./config.js'),
      Twitter = new twit(config);

const queries = [
    '#nodejs', '#javascript', '#reactjs', '#webdev', '#css',
    '#mongodb', '#vuejs', '#npm', '#es6', '#webdevelopment',
    '#fullstack', '#programming', '#coding', '#webdesign', '#html'
]

// Retweet Node Bot
const retweet = function() {
    // Loop through queries and retreive tweet for each one
    for(i = 0; i < queries.length; i++) {
        // Find latest tweet according to the 'q' query in params   
        let params = {
            q: `${queries[i]}`, // Required
            count: 1,
            geocode: '52.520007,13.404954,100mi',
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
                        if(err) {
                            console.log(`TweetBot found but did not retweet post # ${retweetId}`);
                        } else if (response) {
                            console.log(`TweetBot retweeted post # ${retweetId}`);
                        }
                    })
                }
            }
            // If unable to search a tweet
            else {
                console.log('TweetBot failed while searching...')
            }
        })
    } 
}

retweet();























