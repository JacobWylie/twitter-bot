//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */

// heroku config:set BOT_{}_{}='your keys or tokens'

module.exports = {  
  consumer_key: process.env.BOT_CONSUMER_KEY,  
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,  
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
}