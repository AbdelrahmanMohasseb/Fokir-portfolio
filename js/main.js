/*-- Intelligent-header
------------------------------ */ 
const myElement = document.querySelector(".intelligent-header");
const headroom  = new Headroom(myElement);
headroom.init();  

/*- smoth-scroll js
-------------------------*/ 
$('.smooth-scroll a,.hire-me').on("click", function (e) {
    let anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 1000);
    e.preventDefault();
});  
    
/*- Extra js 
---------------------*/	    
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 200
});  

/*-- Isotope active JS
-----------------------------*/
$('.grid').imagesLoaded( function() {

   // filter items on button click
   $('.portfolio-menu').on('click','button',function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
   });
    // init Isotope
    let $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item',
        }
    });
    
});
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});   
/*--- Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
    enabled:true
}
});    
/* magnificPopup video popup */
$('.video-play').magnificPopup({
    type: 'iframe'
});

/*-- CounterUp
------------------------------*/
    
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*-- owl active
------------------------------ */    
$('.testimonel-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay: true,
    dots:true,
    smartSpeed:1000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
});