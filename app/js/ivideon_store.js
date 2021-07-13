import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initProductSlider, initsSrvicesSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initProductSlider();
  initsSrvicesSlider();
});
