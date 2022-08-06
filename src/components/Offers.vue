<template>
  <div class="my-[40px]">
    <div class="w-full bg-primary text-white rounded-lg text-end p-sm font-bold">
      پیشنهادات شگفت انگیز
    </div>
    <div class="grid grid-cols-5 place-content-center gap-y-xl gap-x-[10px] mt-xl w-full">
      <OffersCard v-for="(offer, i) in offers" :key="i" :offer="offer" />
    </div>
  </div>
</template>
<script>
import OffersCard from "./OffersCard.vue";
export default {
  components: {
    OffersCard,
  },
  data() {
    return {
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
