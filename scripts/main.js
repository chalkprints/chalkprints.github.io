$(document).ready(function(){

  $("#camp4_map").mapster({
    singleSelect: true,
    mapKey: "data-key",
    stroke: true,
    strokeColor: "ff0000",
    fillColor: "000000",
    fillOpacity: 0.5,
    onClick: function(e) {
      // user has clicked on an area on the image map, update carousel
      $("#camp4_thumbs").slickGoTo(e.key);
    }
  });


  $("#camp4_thumbs").slick({
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    onAfterChange: function(t, i) {
      // user has moved carousel, update image map
      $("#camp4_map").mapster("set", true, i.toString());
    }
  });

  /*
  $("#camp4_thumbs").click(function(){
    console.log($(this).index());
  });
  */

  // Camp4 map is 640px wide
  var w = Math.min(640, $(window).width());
  $("#camp4_map").mapster("resize", w);
  $("#camp4_thumbs").width(w);

  // Start at a specific climb
  $("#camp4_thumbs").slickGoTo(6);


});