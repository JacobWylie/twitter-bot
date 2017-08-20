# Berlin Javascript Twitter Bot

Purpose?

Keep me hip with JS developers in Berlin

What does it do?

Every hour on the hour it looks for new tweets with hashtags: '#nodejs', '#javascript', '#reactjs', '#webdev', '#css', '#mongodb', '#vuejs', '#npm', '#es6', '#webdevelopment','#mern', '#programming', '#coding', 'webdesign', '#expressjs', from fellow developers in Berlin and retweets them to my account.


Want to make one for yourself?


Clone repo and install modules

```

$ git clone https://github.com/JacobWylie/twitter-bot.git
$ npm init

``` 


Make a twitter account
[Sign up for Twitter](https://twitter.com/signup?lang=en)

Setup a new app on your account
[Create an application](https://apps.twitter.com/app/new)

Follow the steps to get your
- Consumer Key
- Consumer Secret
- Access Token
- Access Token Secret


Setup your account keys/tokens on the server of your choosing

OSX

```

$ export BOT_CONSUMER_KEY={your consumer key}
$ export BOT_CONSUMER_SECRET={your consumer secret}
$ export BOT_ACCESS_TOKEN={your access token}
$ export BOT_ACCESS_TOKEN_{your token secret}

```

Heroku

```

$ heroku config:set BOT_CONSUMER_KEY={your consumer key}
$ heroku config:set BOT_CONSUMER_SECRET={your consumer secret}
$ heroku config:set BOT_ACCESS_TOKEN={your access token}
$ heroku config:set BOT_ACCESS_TOKEN_{your token secret}

```

Windows

```

$ SET BOT_CONSUMER_KEY={your consumer key}
$ SET BOT_CONSUMER_SECRET={your consumer secret}
$ SET BOT_ACCESS_TOKEN={your access token}
$ SET BOT_ACCESS_TOKEN_{your token secret}

```


Customize your bot:

Change search params
- q = queries
- count = how many tweets will be retrieved
- geocode = location of tweets and radius

```javascript

let params = {
    	q: '#something', // Required
    	count: 5,
    	geocode: '52.520007,13.404954,30mi',
    	result_type: 'recent',
    	lang: 'en'    
}

```

Run the app locally

```

npm start

```

or 

Host it on Heroku for FREE

```

$ heroku create our-twitterbot-name
$ git add .
$ git commit -m ""
$ git push heroku master
heroku addons:create scheduler:standard

```

Go to your Heroku dashboard and configure the Heroku Scheduler to run the app periodically. You can also setInterval() in your app and run your app as a 'worker' on Heroku.

























