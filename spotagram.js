// //setup from spotify walkthrough https://github.com/jmperez/spotify-web-api-js
// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();

  // get song from spotify

$(window).load(function() {

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


         if (response.tracks.items.length > 0){
           let track = response.tracks.items[0];
           audio.src = track.preview_url;
           audio.play()
         }
          else {
              alert("SOS")
            var searchAlbums = function (query) {

                $.ajax({

                    url: 'https://api.spotify.com/v1/search',
                    data: {
                        q: "PARTy",
                        type: 'track'
                    },
                    success: function (response) {

                      var test = response.tracks.items[0];
                      audio.src = test.preview_url;
                      audio.play()
                    }
                });
            };
          }


    },
    })
        this.addEventListener('click', function() {
            audio.pause()
          })
     }});






//
// function failedApi(){
//
//     $getRandomSongsArray = ['%25a%25', 'a%25', '%25e%25', 'e%25', '%25i%25', 'i%25', '%25o%25', 'o%25'];
//
//     var array_rand = Math.floor(Math.random() * $getRandomSongsArray.length)
//
//     $getRandomSongs = $getRandomSongsArray[array_rand];
//
//     $getRandomOffset = Math.floor((Math.random() * 100) + 1);
//
//     $url: 'https://api.spotify.com/v1/search?query=$getRandomSongs&offset=$getRandomOffset&limit=1&type=track&market=NL'
//
// }
