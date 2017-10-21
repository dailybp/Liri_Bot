var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id : 'a39b623e218e4cf4b9741b9d8b8c0f34',
  secret : '32548820cb8b4f7f8c2835ad0015c35e'
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});
