<template>
  <div class="mt-xl">
    <custome-border title="محصولات پر فروش بازی کی" icon="diamond" />
    <div class="grid grid-cols-3 gap-x-4 mt-md">
      <MostSellsProductsCard />
      <MostSellsProductsCard />
      <MostSellsProductsCard />
    </div>
  </div>
</template>
<script>
import MostSellsProductsCard from "./MostSellsProductsCard.vue";
import CustomeBorder from "./common/CustomeBorder.vue";
export default {
  components: {
    MostSellsProductsCard,
    CustomeBorder,
  },
};
</script>
<style lang=""></style>
