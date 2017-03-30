function loadMorePics() {
  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      loadPics()
    }
  })
}
