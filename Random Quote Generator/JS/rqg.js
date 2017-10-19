// Need to add facebook api just like twitter
// buttons need to be styled as well
// previous quotes button to be added to if possible
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @KumarShwetank';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
 };
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

var images= ["https://wallpaperscraft.com/image/black_white_line_silver_186_1920x1080.jpg", 
             "https://wallpaperbrowse.com/media/images/photo-background-6.jpg",
             "http://anguerde.com/pics/main/10/247100-black-wallpaper.jpg",
             "https://wallpapercave.com/wp/gGLnRUt.png",
             "https://newevolutiondesigns.com/images/freebies/black-wallpaper-28.jpg",
             "https://www.globaletraining.ca/wp-content/uploads/2015/05/3d-abstract-black-dark-geometry-2501884-2560x1600.png",
             "http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/black-wallpaper-3.jpg",
             "https://wallpapercave.com/wp/SdXflfk.jpg"
            ];

var button = document.querySelector("#quote");
button.addEventListener("click", function() {
  var body = document.querySelector("body");
  var randomNumber = Math.floor(Math.random()*images.length);
  
  body.style.background= "url("+images[randomNumber]+") no-repeat";
  body.style.backgroundSize = "cover";
});
