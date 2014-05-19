/*
jQuery Utils
Copyright (c) 2014- Arvind Thyagarajan
FoSho Licensed
*/

$(document).ready(function() {
	// set up smooth scrolling of page links
	$.localScroll({ hash : true, duration : 500 });
	
	// set up golden ratios
	$(window).resize(sizeGoldens);
	sizeGoldens();
	
});

$(window).load(function() {
	// make sure banner animations kick off after page load
	$("body").removeClass("stopanim");
});

var sizeGoldens = function() {
	$(".row.goldenbox").each(function(index, element) {
		if (!($(element).parents(".goldenbox").length)) {
			if ($(element).hasClass("vertical")) {
				$(element).css({ height : $(element).width() * 1.61 });
			} else {
				$(element).css({ height : $(element).width() * .61 });
			}
		}
    });
};

$.fn.isOnScreen = function() {
    var win = $(window);
    
    var viewport = { left : win.scrollLeft() };
    viewport.right = viewport.left + win.width();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();

    return (!(viewport.left > bounds.left || viewport.right < bounds.right))
};
