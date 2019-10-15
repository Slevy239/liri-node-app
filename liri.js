require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs")

var command = process.argv[2];
var input = process.argv;
var inputArr = [];
var inputStr = '';

for (var i = 3; i < input.length; i++) {
    inputArr.push(input[i]);
}

inputStr = inputArr.join("+");

switch (command) {
    case "concert-this":
        concert(inputStr);
        break;
    case "spotify-this-song":
        song(inputStr);
        break;
    case "movie-this":
        movie(inputStr);
        break;
    case "do-what-it-says":
        doThis(inputStr);
        break;
    case "write-file":
        log(inputStr);
};

function concert() {
    if (inputStr === "") {
        inputStr = "Trey Anastasio"
    }
    axios.get("https://rest.bandsintown.com/artists/" + inputStr + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var info = response.data[0]

            for (var i = 0; i < response.data.length; i++) {
                var results = response.data[i].venue.name;
                var city = response.data[i].venue.city;
                var state = response.data[i].venue.region;
                var country = response.data[i].venue.country;

                var date = new Date(info.datetime);
                var converted = date.toLocaleString();


                console.log("\n");
                console.log("==============================================");
                console.log("-------------------" + inputStr.split('+').join(" ") + "----------------");
                console.log("==============================================");
                console.log("Venue: " + results);
                console.log("----------------------------------------------")
                console.log("Location: " + city + ", " + state + " " + country);
                console.log("----------------------------------------------")
                console.log("Date: " + converted);
                console.log("\n");
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}


function song(inputStr) {
    if (!inputStr) {
        inputStr = "Chalk Dust Torture";
    }
    spotify.search({ type: "track", query: inputStr })
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                var artistName = response.tracks.items[0].artists[0].name;
                var songName = response.tracks.items[0].name;
                var songLink = response.tracks.items[0].external_urls.spotify;
                var albumLink = response.tracks.items[0].album.external_urls.spotify;
            }

            console.log("\n");
            console.log("==============================================");
            console.log("");
            console.log("--------" + inputStr.split('+').join(" ") + " by " + artistName + "-------");
            console.log("");
            console.log("==============================================");
            console.log(" ")
            console.log("Song: " + songName);
            console.log(" ")
            console.log("Song link: " + songLink);
            console.log; ("Album link: " + albumLink);
            console.log(" ")
            console.log("\n");

        })
}

function movie(inputStr) {
    if (!inputStr) {
        inputStr = "fight club";
        console.log("----------------------");

    }
    axios.get("http://www.omdbapi.com/?t=" + inputStr + "&apikey=519a9c34")
        .then(function (response) {
            console.log("\n");
            console.log("=============================================");
            console.log("-------------------" + inputStr.split('+').join(" ") + "----------------");
            console.log("=============================================");
            console.log("Directed by: " + response.data.Director)
            console.log("--------------------------------------------")
            console.log("Starring: " + response.data.Actors);
            console.log("--------------------------------------------")

            console.log("Synopsis: " + response.data.Plot);
            console.log("--------------------------------------------")

            console.log("*********************************************")
            console.log("The film is rated " + response.data.imdbRating + "/10 out of " + response.data.imdbVotes + "on IMDB");
            console.log("\n")


        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);

            }
        })
}


function doThis() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        song(dataArr[1]);

    })

}
function log() {
    fs.appendFile('log.txt', "\n" + process.argv[2] + ", " + process.argv[3], 'UTF-8', function (err, data) {
        if (err) {
            console.log(err)
        }
        console.log("log.txt has been updated!")
    });
}   
