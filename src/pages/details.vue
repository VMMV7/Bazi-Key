<template>
  <ProductDetails />
  <div class="flex justify-center items-center mt-xl">
    <div class="grid grid-cols-4 gap-x-md w-[600px]">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        class="flex justify-center items-center flex-col group py-md rounded-lg cursor-pointer w-3/4"
        :class="activeComponent === i ? 'bg-primary text-white' : ''"
        @click="activeComponent = i"
      >
        <font-icon class="text-current" :name="tab.icon" />
        <p class="text-xs mt-sm">{{ tab.title }}</p>
      </div>
    </div>
  </div>
  <keep-alive>
    <component :is="tabs[activeComponent].name"></component>
  </keep-alive>
</template>
<script>
import ProductDetails from "../components/ProductDetails.vue";
import DescriptionDetails from "../components/DescriptionDetails.vue";
import CommentsDetails from "../components/CommentsDetails.vue";
import QASDetails from "../components/QASDetails.vue";
import ReviewDetails from "../components/ReviewDetails.vue";
export default {
  components: {
    ProductDetails,
    DescriptionDetails,
    CommentsDetails,
    QASDetails,
    ReviewDetails,
  },
  data() {
    return {
      tabs: [
        {
          title: "نقد و بررسی",
          icon: "share",
          name: "ReviewDetails",
        },
        {
          title: "سوالات کاربران",
          icon: "question_mark",
          name: "QASDetails",
        },

        {
          title: "نظرات کاربران",
          icon: "question_answer",
          name: "CommentsDetails",
        },
        {
          title: "توضیحات",
          icon: "format_align_center",
          name: "DescriptionDetails",
        },
      ],
      activeComponent: 3,
    };
  },
};
</script>
<style lang=""></style>
