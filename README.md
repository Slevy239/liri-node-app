# liri-node-app




## Functionality
* Finds Concerts 
* Searchs for Songs
* Finds movies and details
* Runs .txt file commands




### Finds Concerts
Using the Bands in Town API, The user is able to search for artists tour dates based on command line inputs. This application retrieves dates, venue locations and time of the event.


### Search for Songs
Using the Spotify API, users are able to search for song details based on the song name on the command line. The recording artist, song name and Spotify link are retrieved and presented to the user.

### Find Movies
Using the OMDB API, users are able to search movie titles to retrieve titles, directors, actors and plot details.


### Run .txt files
Based on the content of the .txt file, this application is able to run it's content and present the results to the user in the terminal.

## Features

This appilcation uses packages from NPM to retrieve the desired data from the aformentioned API's. These packages are based on specific dependencies detailed in the package.json file.

## Dependencies
 * fs
 * axios
 * node-spotify-api


## Commands

* "concert-this"  Artist
    * Runs command through the concert function.
    * Once this command is executed, artist and concert information will be displayed in the terminal.

*  "spotify-this-song" Song
    * Once this command is executed and the user searchs a song title, the function will call the Spotify API and return results in the terminal. 

* "movie-this" Movie
    * Once this command is executed and the user searches a movie title, the function will call the OMDB API to return details pertain to the specific film.

* "do-what-it-says" 
    * this specific function reads the random.txt file and import the content as the user input. Then the application is executed again with the imported information. In this case, the command would be "spotify-this-song" Tweezer.