var spotify = require("spotifyModule.js");
var twitter = require("twitterModule.js");
var imdb = require("omdbModule.js");

var nodeArgvs = process.argv;
var command = process.argv[2];
var input = "";

for (var i = 3; i < nodeArgvs.length; i++){
  if(i>3 && i < nodeArgvs.length){
    input += "+" + nodeArgvs[i];
  }
  else{
    input += nodeArgvs[i];
  }
}

swithc(command){
  case "my-tweets":
    showTweets(); //use this as export function
  break;

  case "spotify-this-song":
    if(input){
      spotifySong(); //use this as export funciton
    }else{
      spotifySong("");
    }
  break;

  case "movie-this":
    if(input){
      omdbData(input);
    }else{
      omdbData("Mr. Nobody");
    }
  break;

  case "do-what-it-says":
    doThing();
  break;

  default:
    console.log("Please enter command: my-tweets, spotify-this-song, movie-this, or do-what-it-says.")
  break;
}
