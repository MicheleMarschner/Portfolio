$(document).ready(function () {
  //********** navbar - menu background color change while scroll

  $(window).on('scroll', function () {
    var menu_area = $('.navbar');
    if ($(window).scrollTop() > menu_area.height()) {
      menu_area.addClass('sticky-navigation');
    } else {
      menu_area.removeClass('sticky-navigation');
    }
  });

  //*********** navbar - scrollspy js

  $('body').scrollspy({
    target: '#collapsible-navmenu',
    offset: 195,
  });

  //***** Hero - Typed Effect js

  const typed = new Typed('.typed', {
    strings: [
      'Jr. JS Full-Stack Developer',
      'Business Administration Professional',
      'React.js & Node.js Enthusiast',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  });

  //***** About Me - Skillbar js

  var skillbar = $('.skillbar');

  skillbar.waypoint(
    function () {
      skillbar.each(function () {
        $(this)
          .find('.skillbar-child')
          .animate(
            {
              width: $(this).data('percent'),
            },
            1000
          );
      });
    },
    {
      offset: '80%',
    }
  );

  //***** Testimonials - Owl carousel js

  $('.portfolio-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      765: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
