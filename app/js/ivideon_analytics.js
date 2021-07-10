import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initExamplesSlider, initTariffSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initTariffSlider();
});
