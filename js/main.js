$(document).ready(function () {



//********** navbar - menu background color change while scroll

$(window).on('scroll', function () {
    var menu_area = $('.navbar');
    if ($(window).scrollTop() > menu_area.height()) {
        menu_area.addClass('sticky-navigation');
    } 
    else {
        menu_area.removeClass('sticky-navigation');
    }
});


//*********** navbar - scrollspy js

$('body').scrollspy({
    target: '#collapsible-navmenu',
    offset: 195
});


//***** Hero - Typed Effect js

const typed = new Typed(".typed", {
    strings: [
        "a Web Developer student!", 
        "a professional Web Developer!",
        "a Freelancer!"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});



//***** About Me - Skillbar js

var skillbar = $(".skillbar");

skillbar.waypoint(function () {
    skillbar.each(function () {
        $(this).find(".skillbar-child").animate({
            width: $(this).data("percent")
        }, 1000);
    });
}, {
    offset: "80%"
});



//********* Portfolio - Isotope filter

let $btns = $('.portfolio-section .port-nav button');


    $btns.click(function (e) {

        $('.portfolio-section .port-nav button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-section .port-items').isotope({
            filter: selector
        });

        return false;
    });




    //****** Portfolio - Magnific Popup
    

$('.zoom,.zoom1').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
}); 



//***** Testimonials - Owl carousel js

$(".testimonial-slider").owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        765:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

});