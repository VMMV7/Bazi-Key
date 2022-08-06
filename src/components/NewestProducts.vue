<template>
  <custome-border title="جدیـدترین محصـولات بازی کی" icon="layers" link="#">
    <template #more>
      <nuxt-link
        :to="link"
        class="text-xs bg-gray-200 rounded-xl hover:bg-gray-600 hover:text-white py-xs px-sm cursor-pointer min-w-[85px] max-w-[100px]"
      >
        مشاهده همه
      </nuxt-link>
    </template>
  </custome-border>
  <slick ref="slick" :options="slickOptions">
    <div class="q-px-sm" v-for="(p, index) in [...products, ...products]" :key="index">
      <NewestProductsCard :product="p" />
    </div>
  </slick>
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
      products: [
        {
          img: "https://bazikey.com/wp-content/uploads/2022/06/A-247x296.jpg",
          minPrice: 159000,
          maxPrice: 200000,
          name: "call of duty mw 2",
          discount: 80,
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2022/06/A-247x296.jpg",
          minPrice: 159000,
          maxPrice: 200000,
          name: "call of duty mw 2",
          discount: 50,
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2022/06/A-247x296.jpg",
          minPrice: 159000,
          maxPrice: 200000,
          name: "call of duty mw 2",
          discount: 50,
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2022/06/A-247x296.jpg",
          minPrice: 159000,
          maxPrice: 200000,
          name: "call of duty mw 2",
          discount: 60,
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2022/06/A-247x296.jpg",
          minPrice: 159000,
          maxPrice: 200000,
          name: "call of duty mw 2",
          discount: 70,
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
