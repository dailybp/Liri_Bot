var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'KVBsbb02NenoHpsuNg4IaO90v',
  consumer_secret: '02VoovixpdByVbpuTkJENH3nLnrQuMtJHcmwhawKnunYtr17JZ',
  access_token_key: '920053884525129728-FXZd35DNRxdPyrhurdQhZSRjcViNW4L',
  access_token_secret: 'nmBFQ0aPJqzUiD785HHtTMYsyRoCyWFvLzSMT5NtiEeEa'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
