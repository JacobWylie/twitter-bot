const nodeBot       = require('./nodeBot.js'),
	  reactBot      = require('./reactBot.js')
	  javascriptBot = require('./nodeBot.js');

// Grab and retweet Node Bot when program starts
nodeBot();
// Retweet Node Bot every 15 mins
setInterval(nodeBot, 1200000)

// Grab and retweet React Bot when program starts
reactBot();
// Retweet React Bot every 15 mins
setInterval(reactBot, 1200000)

// Grab and retweet JavaScript Bot when program starts
javascriptBot();
// Retweet Javascript Bot every 15 mins
setInterval(javascriptBot, 1200000)

























