function myFunction(x) {
    x.classList.toggle("change");
}

// $('.hamburger').click(function () {
// $('.mobile-menu').css('top','70px');
// });

$('.hamburger').click(function () {
if ( $('.mobile-menu').is(':hidden')){
$('.mobile-menu').slideDown ('slow');
} else {
	$('.mobile-menu').slideUp();
}
});