$(document).ready(loadPics)


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    searchTracks(document.getElementById(this.id).alt)
      pauseTrack()
      })
      // $(function() {
      //     $("img.lazy").lazyload();
      //     var timeout = setTimeout(function() {
      //         $("img.lazy").trigger("click")
      //     }, 5000);
      //
      // });
  // $(function() {
  //     $("img.lazy").lazyload({
  //     event : "sporty"
  //   });
  // });

  // $(window).bind("load", function() {
  //   var timeout = setTimeout(function() {
  //       $("img.lazy").trigger("sporty")
  //       }, 5000);
  //     });



  })


  // $(window).scroll(function() {
  //
  //   if($(window).scrollTop() == $(document).height() - $(window).height()) {
  //
  //     loadPics()
  //   }
  // })
