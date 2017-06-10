$(document).ready(loadPics())


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    spotifyRequest(document.getElementById(this.id).alt)

      pauseTrack()
      })

  })


//refactor flickr.js remove document.ready, chain promises for refactor(.then, passed through callback function, can take success and failure callbacks)
