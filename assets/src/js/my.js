$(document).ready(function(){
 $('.sliders').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
 });

 $('.video-button').click(function () {
  $(this).toggleClass('active');
    if ($('#rain-track').get(0).paused) {
      $('#rain-track').get(0).play();
    } else {
      $('#rain-track').get(0).pause();
    }
  });

  $('.servise__slider').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  
  $('.service__photo_slider').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  $('.slider_partners').slick({
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
});