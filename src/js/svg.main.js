import { SVG } from "@svgdotjs/svg.js";

(() => {
  window.addEventListener("DOMContentLoaded", function (e) {
    var draw = SVG().addTo("#container").size(300, 300);
    var rect = draw.rect(100, 100).attr({ fill: "#f06" });
  });
})();
