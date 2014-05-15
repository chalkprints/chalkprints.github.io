$(document).ready(function(){

  $("#map").mapster({
    singleSelect: true,
    mapKey: "data-key",
    stroke: true,
    strokeColor: "ff0000",
    fillColor: "000000",
    fillOpacity: 0.5,
    onClick: function(e) {
      // user has clicked on an area on the image map, update carousel
      $("#thumbs").slickGoTo(e.key);
    }
  });



  $("#thumbs").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 100,
    dots: false,
    arrows: false,
    onAfterChange: function(t, i) {
      // user has moved carousel, update image map
      console.log(i);
      $("#map").mapster("set", true, i.toString());
    }
  });

  /*
  $("#camp4_thumbs").click(function(){
    console.log($(this).index());
  });
  */

  // Responsive => set the width of the containers
  // Camp4 map is 640px wide
  var w = Math.min(640, $(window).width());
  $("#map").mapster("resize", w);
  $("#thumbs").width(w);

  // Start at a specific climb
  $("#thumbs").slickGoTo(6);


});