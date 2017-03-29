// //setup from spotify walkthrough https://github.com/jmperez/spotify-web-api-js
// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();

  // get song from spotify

$(document).ready(function() {

    var audio = new Audio();
    var songTitle =  $("img").click(function() {
        // searchTracks(document.getElementById(this.id).alt);
        alert("sup")

     });
   var searchTracks = function(query) {
     $.ajax({
       url: 'https://api.spotify.com/v1/search',
       data: {
         q: query,
         type: 'track'
       },
       success: function (response) {
         var track = response.tracks.items[0];

                    audio.src = track.preview_url;
                    audio.play()
                  }})

        this.addEventListener('click', function() {
            audio.pause()

          })
     }});
