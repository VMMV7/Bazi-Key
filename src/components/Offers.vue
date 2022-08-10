<template>
  <section class="py-xl" dir="rtl">
    <container>
      <div class="w-full bg-primary text-white rounded-lg p-sm font-bold">
        پیشنهادات شگفت انگیز
      </div>
      <slick class="mt-md" ref="slick" :options="slickOptions" dir="ltr">
        <div class="q-px-sm" v-for="(offer, i) in [...offers, ...offers]" :key="i">
          <OffersCard :offer="offer" />
        </div>
      </slick>
    </container>
  </section>
</template>
<script>
import OffersCard from "./OffersCard.vue";
export default {
  components: {
    OffersCard,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 5,
        infinite: true,
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
      offers: [
        {
          img: "https://bazikey.com/wp-content/uploads/2019/09/R6-3-247x296.jpg",
          title: "Rainbow Six",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2019/09/R6-3-247x296.jpg",
          title: "Rainbow Six",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2019/09/Rust-247x296.jpg",
          title: "Rust",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2019/09/R6-3-247x296.jpg",
          title: "Rainbow Six",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2019/09/Rust-247x296.jpg",
          title: "Rust",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
