function searchTracks(query) {
  $.ajax({url: 'https://api.spotify.com/v1/search',
          data: {q: query, type: 'track'},
          success: function(response) {trackWasFound(response)}
  })
}

function trackWasFound(response) {
  let track = response.tracks.items[0]
  if (track !== undefined) {
    audio.src = track.preview_url
    audio.play()
  } else {
    searchTracksAgain()
  }
}

function searchTracksAgain(query) {
  var words = ["party", "Kendrick", "untitled", "bieber", "steven", "savage", "code", "death", "popcorn", "versace", "crank that soulja boy"]
  var word = words[Math.floor(Math.random()* words.length)];

  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: word,
      type: 'track'
    },
    success: function (response) {
      var test = response.tracks.items[0]
      audio.src = test.preview_url
      audio.play()
    }
})}
