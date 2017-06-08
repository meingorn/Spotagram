//
// //auth request
// const client_id = client_id
// const response_type = 'token'
// const redirect_uri = 'https://spotagram.herokuapp.com/'

//needs auth now, attempting to do it without login which may not be an option
const url = "https://accounts.spotify.com/api/token";
const params = { grant_type: "client_credentials" };
const auth = "Basic " + authentication;

$.ajax(
  {
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      data: {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": myurl,
        "client_secret": mysecret,
        "client_id": myid,
      },
      sucess: function(result) {
      url: url,
      type: 'POST',
      dataType: 'json',
      headers: {
          'Authorization' : auth
      },
      data: params,
        success: function(data) {
        console.log('success', data);
    }
  }
});

function searchTracks(query) {
  $.ajax({url: 'https://api.spotify.com/v1/search',
          headers: {
            'Authorization': 'Bearer ' +

          {data: {q: query, type: 'track'}}},
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
