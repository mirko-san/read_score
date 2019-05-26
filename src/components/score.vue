<template>
  <div id="score"></div>
</template>

<script>
import SVG from "svg.js";

export default {
  props: ["pickedNote", "obj"],
  mounted: function() {
    var draw = SVG("score").size(700, 500);

    draw.image("img/clef_g.png", 157, 415);
    draw.line(0, 85, 700, 85).stroke({ width: 1 });
    draw.line(0, 85 + 58 * 1, 700, 85 + 58 * 1).stroke({ width: 1 });
    draw.line(0, 85 + 58 * 2, 700, 85 + 58 * 2).stroke({ width: 1 });
    draw.line(0, 85 + 58 * 3, 700, 85 + 58 * 3).stroke({ width: 1 });
    draw.line(0, 85 + 58 * 4, 700, 85 + 58 * 4).stroke({ width: 1 });

    draw
      .ellipse(70, 58)
      // .fill('none')
      // .stroke({ width: 4 })
      .move(350, this.obj[this.pickedNote].y)
      .transform({ rotation: 125 });
  }
};
</script>
