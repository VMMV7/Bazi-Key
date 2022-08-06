<template>
  <div class="inline flex">
    <span v-for="(star, index) in stars" :key="index"
      ><font-icon
        :color="star === 'star' ? 'text-amber-400' : 'text-gray-400'"
        :name="star"
    /></span>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  rate: Number, // float etc. 1, 3, 2.5, 5
  maxRate: {
    type: Number,
    default: 5,
  },
});
const starFull = "star";
const starHalf = "star_half";
const starEmpty = "grade";
const stars = reactive([]);
const rate = Math.min(props.rate, props.maxRate);
const ishalfstar = !Number.isInteger(rate);
// const remain = props.maxRate - rate // 2.5
for (let i = 1; i <= props.maxRate; i++) {
  // i=4 , rate=3.5
  if (i <= rate) {
    stars.push(starFull);
  } else if (ishalfstar && parseInt(rate) + 1 === i) {
    stars.push(starHalf);
  } else {
    stars.push(starEmpty);
  }
}
</script>
