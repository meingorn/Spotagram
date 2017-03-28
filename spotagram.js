// //setup from spotify walkthrough https://github.com/jmperez/spotify-web-api-js
// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();

$("document").ready(function() {














  // get song from spotify

    var audio = new Audio();
    var songTitle =  $("img").click(function() {
        searchTracks(document.getElementById(this.id).alt);
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

         //doesn't work but hopfully will pause if already playing
                    audio.src = track.preview_url;
                    if (audio.play()) {
                      this.addEventListener('click',      function(e) {
                          audio.pause();
                        })}

                            else {
                              audio.play()
                            }

                          }})

     }});
