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

