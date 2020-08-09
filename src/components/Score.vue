<template>
  <div id="score"></div>
</template>

<script>
import SVG from 'svg.js';

export default {
  props: ['pickedNote', 'obj'],
  data: function() {
    return {
      thisNote: ''
    };
  },
  mounted: function() {
    const draw_width = 700;
    const interval = 58;
    var draw = SVG('score').size(draw_width, 500);

    draw.image('img/clef_g.png', 157, 415);

    // 五線譜
    for (let index = 0; index < 5; index++) {
      draw
        .line(0, 85 + interval * index, draw_width, 85 + interval * index)
        .stroke({ width: 1 });
    }

    // 音符
    this.thisNote = draw
      .ellipse(70, 58)
      // .fill('none')
      // .stroke({ width: 4 })
      .move(draw_width / 2, this.obj[this.pickedNote].y);
  },
  watch: {
    pickedNote: function(newVal) {
      this.thisNote.y(this.obj[newVal].y);
    }
  }
};
</script>
