import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initTariffSlider, initProductSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initTariffSlider();
  initProductSlider();
});
