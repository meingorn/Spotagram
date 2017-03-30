$(document).ready(loadPics)


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    searchTracks(document.getElementById(this.id).alt)
      pauseTrack()
      })

  })

  // $(window).scroll(function() {
  //
  //   if($(window).scrollTop() == $(document).height() - $(window).height()) {
  //
  //     loadPics()
  //   }
  // })
