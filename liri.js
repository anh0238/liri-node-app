
require("dotenv").config();

var keys = require("./keys");
var spotify = new spotify(keys.spotify);

var request = require("request");

var moment = require("moment");

var fs = require("fs");

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

        spotify.search(
            {
                type: "track",
                query: song
            },
            function(error, data) {
                if (error) {
                    console.log(error);
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



// do-what-it-says
// node liri.js do-what-it-says





