import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import {
  initExamplesSlider,
  initInterfaceSlider,
  initTariffSlider,
} from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initExamplesSlider();
  initInterfaceSlider();
  initTariffSlider();
});
