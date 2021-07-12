import "slick-carousel";

export const initExamplesSlider = () => {
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

export const initInterfaceSlider = () => {
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

export const initTariffSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--tariff-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() <= 768 || $(window).width() >= 1200) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "20%",
            infinite: false,
            arrows: false,
            dots: false,
            variableWidth: true,
            mobileFirst: true,
          });
        }
      }
    });
  });
};

export const initProductSlider = () => {
  $(".js--product-slider").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    mobileFirst: true,
    prevArrow: $(".ivideon-office-slider__arrow--prev"),
    nextArrow: $(".ivideon-office-slider__arrow--next"),
  });
};
