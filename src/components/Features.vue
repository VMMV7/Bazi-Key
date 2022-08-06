<template>
  <div class="grid grid-cols-5 mt-[100px]">
    <FeaturesCard v-for="(feature, i) in features" :key="i" :feature="feature" />
  </div>
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
          icon: "local_shipping",
          title: "تحویل فوق العاده سریع",
          color: "bg-red-200",
        },
        {
          icon: "local_shipping",
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
      ],
    };
  },
};
</script>
<style lang=""></style>
