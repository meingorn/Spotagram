
$("document").ready(function() {
  var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=1d8d38fe92286045c8cd4e4c48cdf529&safe_search=1&per_page=50";
  var src;
  var images = []

function imageCreator(images) {$(images).each(function (i, item) {item.prependTo(".flickrDiv")})}

$.getJSON(url + "&format=json&jsoncallback=?", function(data){

    $.each(data.photos.photo, function(i,item){

        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
        // var altReg = item.title.replace(/\W/g, ' ')
        // var idReg = item.title.replace(/\W/g, ' ')
        var altReg = item.title
        var idReg = item.title

        alt = makeNice(altReg)
        id = makeNice(idReg)

        // check(id, alt)

        images.push(
        $("<img/>").attr(
          {"src": src,
          "alt": alt,
          "id": id
        })
         );
         //
        //  check(id, alt)
         console.log(id);
        if ( i == 100 ) return false;
      imageCreator(images)
    });

});
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
