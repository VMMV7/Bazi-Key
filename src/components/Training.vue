<template>
  <section class="pt-xl">
    <container>
      <custome-border title="آموزشی" icon="diamond" link="#" />
      <slick ref="slick" :options="slickOptions">
        <div class="px-sm" v-for="(n, index) in newses" :key="index">
          <NewsCard :news="n" />
        </div>
      </slick>
    </container>
  </section>
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
      slickOptions: {
        slidesToShow: 3,
        infinite: false,
        arrows: false,
        dots: false,
        autoplay: true,
      },
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
        {
          title: "آموزش تغییر ریجن اکانت استیم",
          img: "https://bazikey.com/wp-content/uploads/2019/10/12332-256x170.jpg",
          day: 8,
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
