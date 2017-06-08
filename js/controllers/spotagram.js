
//auth request
const client_id = client_id
const response_type = 'token'
const redirect_uri = 'https://spotagram.herokuapp.com/'

//needs auth now, attempting to do it without login which may not be an option
function searchTracks(query) {
  $.ajax({url: 'https://api.spotify.com/v1/search',
          headers: {
            'Authorization': 'Bearer ' +
          }
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
