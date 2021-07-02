import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";

document.addEventListener("DOMContentLoaded", function () {
  initExamplesSlider();
  initInterfaceSlider();
});

const initExamplesSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--examples-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 768) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
            mobileFirst: true,
          });
        }
      }
    });
  });
};

const initInterfaceSlider = () => {
  $(".js--Interface-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20%",
        },
      },
    ],
  });
};
