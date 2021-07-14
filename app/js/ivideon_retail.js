import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import { initBubleSlider, initZoneSlider } from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  initBubleSlider();
  initZoneSlider();
});
