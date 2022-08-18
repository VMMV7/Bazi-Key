<template>
  <section dir="rtl">
    <container>
      <custome-border title="جدیـدترین محصـولات بازی کی" icon="layers">
        <template #more>
          <router-link
            to="#"
            class="text-xs bg-gray-200 rounded-xl hover:bg-gray-600 hover:text-white py-xs px-sm cursor-pointer min-w-[85px] max-w-[100px]"
          >
            مشاهده همه
          </router-link>
        </template>
      </custome-border>
      <slick v-if="products.length > 0" ref="slick" :options="slickOptions" dir="ltr">
        <div class="q-pa-sm" v-for="(product, i) in products" :key="i">
          <NewestProductsCard :product="product" />
        </div>
      </slick>
    </container>
  </section>
  <!-- <div class="grid grid-cols-5 place-content-center gap-y-xl gap-x-[10px] mt-xl w-full">
    <NewestProductsCard v-for="(p, index) in [...products,...products]" :key="index" :product="p" />
  </div> -->
</template>
<script>
import NewestProductsCard from "./NewestProductsCard.vue";
import CustomeBorder from "./common/CustomeBorder.vue";
export default {
  components: {
    NewestProductsCard,
    CustomeBorder,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 5,
        infinite: false,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
      products: [],
    };
  },
  mounted() {
    this.$axios.get("http://localhost:4000/product").then((data) => {
      this.products = data.data;
    });
  },
};
</script>
