<template>
  <section id="most-sellers-products" class="pt-xl">
    <container>
      <custome-border title="محصولات پر فروش بازی کی" icon="diamond" />
      <slick ref="slick" :options="slickOptions">
        <div class="px-sm" v-for="(product, i) in products" :key="product">
          <MostSellsProductsCard :product="product" />
        </div>
      </slick>
    </container>
  </section>
</template>
<script>
import MostSellsProductsCard from "./MostSellsProductsCard.vue";
import CustomeBorder from "./common/CustomeBorder.vue";
export default {
  components: {
    MostSellsProductsCard,
    CustomeBorder,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: false,
        arrows: false,
        dots: false,
        autoplay: true,
      },
      products: [
        {
          title: "Super Hydra Random Key",
          price: 2000,
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
