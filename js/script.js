var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

// The Animated Effect
// Now that we have our back to top button in place, we need to add the jQuery animation effect when the page is returning to top. 
// This must be added on a click event, so when the button is clicked, code should be triggered.

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});