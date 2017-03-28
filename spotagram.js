$("document").ready(function() {
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
         num = Math.random()
         var track = response.tracks.items[0];
          audio.src = track.preview_url;
          audio.play()
      }})

    }

    this.addEventListener('click', function() {
      audio.pause()

    })
  });
