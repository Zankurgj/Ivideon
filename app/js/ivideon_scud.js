import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initTariffSlider } from "./slider";
require("@fancyapps/fancybox");

document.addEventListener("DOMContentLoaded", function () {
  initTariffSlider();
});
