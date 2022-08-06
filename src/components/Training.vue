<template>
  <div class="mt-xl">
    <custome-border title="آموزشی" icon="diamond" link="#" />
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
          title: "آموزش فعال کردن استیم گارد در موبایل",
          img: "https://bazikey.com/wp-content/uploads/2019/10/12332-256x170.jpg",
          day: 17,
          mount: "فروردین",
          year: 1041,
        },
        {
          title: "آموزش تغییر ریجن اکانت استیم",
          img: "https://bazikey.com/wp-content/uploads/2019/10/Region-2-256x170.jpg",
          day: 9,
          mount: "خرداد",
          year: 1041,
        },
        {
          title: "آموزش تغییر ریجن اکانت استیم",
          img: "https://bazikey.com/wp-content/uploads/2019/10/12332-256x170.jpg",
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
