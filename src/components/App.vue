<template>
  <div>
    <score v-if="score" :pickedNote="pickedNote" :obj="obj"></score>
    <p v-if="score">現在表示しているのは {{ pickedNote }} {{ obj[pickedNote].jp }}</p>
  </div>
</template>

<script>
import score from "../components/score.vue";

export default {
  components: {
    score
  },
  data: function() {
    return {
      score: true,
      obj: {
        c4: {
          jp: "ド",
          y: 85 + 58 * 5 - 29
        },
        d4: {
          jp: "レ",
          y: 85 + 58 * 4
        },
        e4: {
          jp: "ミ",
          y: 85 + 58 * 4 - 29
        },
        f4: {
          jp: "ファ",
          y: 85 + 58 * 3
        },
        g4: {
          jp: "ソ",
          y: 85 + 58 * 3 - 29
        },
        a4: {
          jp: "ラ",
          y: 85 + 58 * 2
        },
        b4: {
          jp: "シ",
          y: 85 + 58 * 2 - 29
        },
        c5: {
          jp: "ド",
          y: 85 + 58 * 1
        },
        d5: {
          jp: "レ",
          y: 85 + 58 * 1 - 29
        },
        e5: {
          jp: "ミ",
          y: 85 + 58 * 0
        },
        f5: {
          jp: "ファ",
          y: 85 + 58 * 0 - 29
        }
      }
    };
  },
  computed: {
    pickedNote: function() {
      const keys = Object.keys(this.obj);
      const pick = keys[Math.floor(Math.random() * keys.length)];
      console.log(pick);
      return pick;
    }
  }
};
</script>
