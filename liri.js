
require("dotenv").config();

var keys = require("./keys");


var request = require("request");

//var moment = require("moment");

//var fs = require("fs");

var spotify = new Spotify(keys.spotify);


// concert-this
// node liri.js concert-this <artist/band name here>
 
var getBand = function(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log("Concerts for " + artist + ":");

            var data = JSON.parse(body);

            for (var i = 0; i < data.length; i++) {
                var information = data[i];

                console.log("Venue: " + information.venue.name);
                console.log("Venue Location: " + information.venue.city);
                console.log("Date: " + information.datetime);
                    //information.venue.city + "/n" + information.venue.name + "/n" + information.datetime
            }
        }
    });
};

// spotify-this-song
// node liri.js spotify-this-song '<song name here>
var getSong = function(song) {
    if (error) {
        console.log(error);
    } else {
        console.log("Song Information: ");

        spotify.search({ type: "track", query: song },
            function(err, data) {
                if (err) {
                    return console.log(err);
                }

                var information = data.tracks.items;

                for (var i = 0; i < information.length; i++) {
                    console.log(i);
                }
            }


        );
    }
}

// movie-this
// node liri.js movie-this '<movie name here>
var getMovie = function(movie) {

    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(queryURL, function(error, response, body) {
        var data = JSON.parse(body);

        console.log("Title: " + data.Title);
        console.log("Year: " + data.Year);
        console.log("IMDB Rating: " + data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
        console.log("Country: " + data.Country);
        console.log("Language: " + data.Language);
        console.log("Plot: " + data.Plot);
        console.log("Actors: " + data.Actors);
    });
};

// do-what-it-says
// node liri.js do-what-it-says

var pick = function(caseData, functionData) {
    switch (caseData) {
    case "concert-this":
      getBand(functionData);
      break;
    case "spotify-this-song":
      getSong(functionData);
      break;
    case "movie-this":
      getMovie(functionData);
      break;
/*     case "do-what-it-says":
      doWhatItSays();
      break; */
    default:
      console.log("LIRI doesn't know that");
    }
  };

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };

runThis(process.argv[2], process.argv.slice(3).join(" "));

