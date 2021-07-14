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

export const initsSrvicesSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--slider-services").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 1024) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            centerMode: false,
            infinite: false,
            arrows: false,
            dots: false,
            mobileFirst: true,
          });
        }
      }
    });
  });
};

export const initBubleSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--feature-buble-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() <= 768 || $(window).width() >= 1024) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            centerMode: false,
            infinite: false,
            arrows: false,
            dots: false,
            mobileFirst: true,
          });
        }
      }
    });
  });
};

export const initZoneSlider = () => {
  const zoneSliderSelector = $(".js--zone-slider");
  const currentSlideSelector = $(".js--zone-current-slide");
  const totalSlideSelector = $(".js--zone-total-slide");
  const progressSelector = $(".js--zone-progress-slide");

  const updateSliderCounter = (slick) => {
    const currentSlideNumber = slick.slickCurrentSlide() + 1;
    const totalSledeNumber = slick.slideCount;
    const slidePercent =
      Math.round((currentSlideNumber / totalSledeNumber) * 100) / 100;
    totalSlideSelector.text(`0${totalSledeNumber}`);
    currentSlideSelector.text(`0${currentSlideNumber}`);
    progressSelector.css({
      transform: "scaleX(" + slidePercent + ")",
    });
  };

  zoneSliderSelector.on("init", function (event, slick) {
    updateSliderCounter(slick);
  });

  zoneSliderSelector.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  zoneSliderSelector.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false,
    mobileFirst: true,
    prevArrow: $(".ivideon-zone__slider-arrow--prev"),
    nextArrow: $(".ivideon-zone__slider-arrow--next"),
  });
};
