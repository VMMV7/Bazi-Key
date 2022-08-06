<template>
  <div class="container px-md xl:px-[200px]">
    <Banner />
    <Offers />
    <br class="border" />
    <NewestProducts />
    <MostSellesProducts />
    <BaziMag />
    <Training />
    <Features />
  </div>
</template>
<script>
import Banner from "src/components/Banner.vue";
import Offers from "src/components/Offers.vue";
import NewestProducts from "src/components/NewestProducts.vue";
import MostSellesProducts from "src/components/MostSellesProducts.vue";
import BaziMag from "src/components/BaziMag.vue";
import Training from "src/components/Training.vue";
import Features from "src/components/Features.vue";
export default {
  components: {
    Banner,
    Offers,
    NewestProducts,
    MostSellesProducts,
    BaziMag,
    Training,
    Features,
  },
};
</script>
<style lang="scss"></style>
