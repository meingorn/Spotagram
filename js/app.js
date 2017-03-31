$(window).load(function() {
  loadPics()
  var songTitle =  $("img").click(function() {
    searchTracks(document.getElementById(this.id).alt)
      pauseTrack()
      })
  })
