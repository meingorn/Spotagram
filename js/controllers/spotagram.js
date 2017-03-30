function searchTracksAgain(query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: "party",
      type: 'track'
    },
    success: function (response) {
      var test = response.tracks.items[0]
      audio.src = test.preview_url
      audio.play()
    }
})}

function trackWasFound(response) {
  let track = response.tracks.items[0]
  if (track !== undefined) {
    audio.src = track.preview_url
    audio.play()
  } else {
    alert("Choose another photo!")
    searchTracksAgain()
  }
}

function searchTracks(query) {
  $.ajax({url: 'https://api.spotify.com/v1/search',
          data: {q: query, type: 'track'},
          success: function(response) {trackWasFound(response)}
  })
}


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    searchTracks(document.getElementById(this.id).alt)
    this.addEventListener('click', function() {
        audio.pause()
      })
  })}
)






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
