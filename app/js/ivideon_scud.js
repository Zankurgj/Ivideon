import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initTariffSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initTariffSlider();
});
