<template>
  <section class="py-[100px]" dir="ltr">
    <container>
      <slick ref="slick" :options="slickOptions">
        <div v-for="(feature, i) in features" :key="i" class="px-sm">
          <FeaturesCard :feature="feature" />
        </div>
      </slick>
    </container>
  </section>
</template>
<script>
import FeaturesCard from "./FeaturesCard.vue";
export default {
  components: {
    FeaturesCard,
  },
  data() {
    return {
      features: [
        {
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-orange-200",
        },
        {
          icon: "paid",
          title: "تضمین بهترین قیمت",
          color: "bg-red-200",
        },
        {
          icon: "map",
          title: "تحویل فوق العاده سریع",
          color: "bg-green-200",
        },
        {
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-yellow-200",
        },
        {
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-purple-200",
        },
        {
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-purple-200",
        },
        {
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-purple-200",
        },
      ],
      slickOptions: {
        slidesToShow: 5,
        infinite: false,
        arrows: false,
        dots: false,
        autoplay: false,
      },
    };
  },
};
</script>
<style lang=""></style>
