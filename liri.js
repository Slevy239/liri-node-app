require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
// var moment = require("moment");
// moment().format();

var axios = require("axios");

// var fs = require('fs');


var command = process.argv[2];
var value = process.argv[3];

switch (command) {
    case "concert-this":
        concert(value);
        break;
    case "spotify-this-song":
        song(value);
        break;
    case "movie-this":
        moveie(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};

function concert(value) {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
    .then(function(response) {    
        for (var i = 0; i < response.data.length; i++) {
            var dateTime = response.data[i].datatime;
            var results = response.data[i].venue.name;

            console.log(results);
            // console.log(response.data);
            // console.log(response.data.venue);

        }    

})
.catch(function (err) {
    console.log(err);
});
}
