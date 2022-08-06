<template>
  <div class="mt-xl">
    <custome-border title="بازی مگ" icon="rss_feed" link="#" />
    <div class="grid grid-cols-3 gap-x-4">
      <NewsCard v-for="(n, index) in newses" :key="index" :news="n" />
    </div>
  </div>
</template>
<script>
import NewsCard from "./NewsCard.vue";
import CustomeBorder from "./common/CustomeBorder.vue";
export default {
  components: {
    NewsCard,
    CustomeBorder,
  },
  data() {
    return {
      newses: [
        {
          title: "تاریخ انتشار بازی Diablo Immortal",
          img: "https://bazikey.com/wp-content/uploads/2022/05/2-min-6-256x170.jpg",
          day: 8,
          mount: "خرداد",
          year: 1041,
        },
        {
          title: "تاریخ انتشار بازی Diablo Immortal",
          img: "https://bazikey.com/wp-content/uploads/2022/05/2-min-5-256x170.jpg",
          day: 9,
          mount: "خرداد",
          year: 1041,
        },
        {
          title: "تاریخ انتشار بازی Diablo Immortal",
          img: "https://bazikey.com/wp-content/uploads/2022/05/2-min-6-256x170.jpg",
          day: 8,
          mount: "خرداد",
          year: 1041,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
