var flickrImages = []
audio = new Audio()

$("document").ready(function() {
  var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=1d8d38fe92286045c8cd4e4c48cdf529&safe_search=1&per_page=50"
  // function imageCreator(images) {
  //   $(images).each(function (item, i) {
  //
  //   })
  // }
  $.getJSON(url + "&format=json&jsoncallback=?", function(data) {
    $.each(data.photos.photo, function(i, item){
      if ( i == 100 )
        return false;
      let src = `http://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

      // var altReg = item.title.replace(/\W/g, ' ')
      // var idReg = item.title.replace(/\W/g, ' ')
      let altReg = idReg = item.title
      let alt = makeNice(altReg)
      let id = makeNice(idReg)
      let currImg = new FlickrImage(id, src, alt)
      flickrImages.push(currImg)
      currImg.html.prependTo(".flickrDiv")
    })
    // imageCreator(images)
  })
})

  function makeNice(string){
    var split = string.split(" ")
    if (split.length > 1){
      return split.slice(0,1).join("")
    }
    else {
      return split.join(" ")
    }
  }



  // function check(id, alt){
  //   if (id == false) {
  //     id = "party"
  //     alt = "party"
  //   }
  // }
