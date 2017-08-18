const nodeBot       = require('./nodeBot.js'),
	  reactBot      = require('./reactBot.js')
	  javascriptBot = require('./javascriptBot.js');

// Retweet #nodejs when app starts
nodeBot();
// Retweet Node Bot every 15 mins
// setInterval(nodeBot, 1200000)

// Retweet #reactjs when app starts
reactBot();
// Retweet React Bot every 15 mins
// setInterval(reactBot, 1200000)

// Retweet #javascript when app starts
javascriptBot();
// Retweet Javascript Bot every 15 mins
// setInterval(javascriptBot, 1200000)

























