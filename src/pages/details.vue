<template>
  <section dir="rtl">
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
          <q-icon class="text-current text-2xl" :name="tab.icon" />
          <p class="text-xs mt-sm">{{ tab.title }}</p>
        </div>
      </div>
    </div>
    <keep-alive>
      <container fluid>
        <component :is="tabs[activeComponent].name"></component>
      </container>
    </keep-alive>
    <div class="mt-xl">
      <container fluid>
        <CustomeBorder title="محصولات مشابه" icon="keyboard_return" />
        <slick ref="slick" :options="slickOptions" dir="ltr">
          <div class="px-sm">
            <SimilarProductsCard />
          </div>
          <div class="px-sm">
            <SimilarProductsCard />
          </div>
          <div class="px-sm">
            <SimilarProductsCard />
          </div>
          <div class="px-sm">
            <SimilarProductsCard />
          </div>
          <div class="px-sm">
            <SimilarProductsCard />
          </div>
        </slick>
      </container>
    </div>
    <div class="mt-xl">
      <container fluid>
        <CustomeBorder title="کالاهایی که دیده‌اید" icon="widgets" />
      </container>
    </div>
  </section>
</template>
<script>
import ProductDetails from "../components/ProductDetails.vue";
import DescriptionDetails from "../components/DescriptionDetails.vue";
import CommentsDetails from "../components/CommentsDetails.vue";
import QASDetails from "../components/QASDetails.vue";
import ReviewDetails from "../components/ReviewDetails.vue";
import CustomeBorder from "src/components/common/CustomeBorder.vue";
import SimilarProductsCard from "../components/SimilarProductsCard.vue";
export default {
  components: {
    ProductDetails,
    DescriptionDetails,
    CommentsDetails,
    QASDetails,
    ReviewDetails,
    CustomeBorder,
    SimilarProductsCard,
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
      tabs: [
        {
          title: "توضیحات",
          icon: "format_align_center",
          name: "DescriptionDetails",
        },

        {
          title: "نظرات کاربران",
          icon: "question_answer",
          name: "CommentsDetails",
        },
        {
          title: "سوالات کاربران",
          icon: "question_mark",
          name: "QASDetails",
        },
        {
          title: "نقد و بررسی",
          icon: "share",
          name: "ReviewDetails",
        },
      ],
      activeComponent: 1,
    };
  },
};
</script>
<style lang=""></style>
