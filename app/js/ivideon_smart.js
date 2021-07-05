import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initExamplesSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initExamplesSlider();
});
