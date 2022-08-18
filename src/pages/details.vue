<template>
  <section v-if="product" dir="rtl">
    <ProductDetails :product="product" />
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
    <container fluid>
      <DescriptionDetails
        :product="product"
        v-show="activeComponent === 0"
      ></DescriptionDetails>
      <CommentsDetails
        :productId="product._id"
        v-show="activeComponent === 1"
      ></CommentsDetails>
      <QASDetails :product="product" v-show="activeComponent === 2"></QASDetails>
      <ReviewDetails :product="product" v-show="activeComponent === 3"></ReviewDetails>
    </container>
    <div class="mt-xl">
      <container fluid>
        <CustomeBorder title="محصولات مشابه" icon="keyboard_return" />
        <slick ref="slick" :options="slickOptions" dir="ltr">
          <div v-for="(p, i) in products" :key="i" class="p-sm">
            <SimilarProductsCard :product="p" />
          </div>
        </slick>
      </container>
    </div>
    <div class="my-xl">
      <container fluid>
        <CustomeBorder title="کالاهایی که دیده‌اید" icon="widgets" />
        <slick ref="slick" :options="MostSellsSlickOptions" dir="ltr">
          <div v-for="(p, i) in products" :key="i" class="p-sm">
            <List-Card :product="p" />
          </div>
        </slick>
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
import MostSellsProductsCardVue from "src/components/MostSellsProductsCard.vue";
export default {
  components: {
    ProductDetails,
    DescriptionDetails,
    CommentsDetails,
    QASDetails,
    ReviewDetails,
    CustomeBorder,
    SimilarProductsCard,
    'List-Card': MostSellsProductsCardVue,
  },
  created() {
    const id = this.$route.params.id;
    this.$api.get(`product/${id}`).then((data) => {
      this.product = data.data[0];
    });
  },
  data() {
    return {
      product: null,
      products: [
        {
          title: "Super Hydra Random Key",
          price: 5000,
          rate: 3,
          img: "https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg",
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
          rate: 3,
          img: "https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg",
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
          rate: 3,
          img: "https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg",
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
          rate: 3,
          img: "https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg",
        },
        {
          title: "Super Hydra Random Key",
          price: 2000,
          rate: 3,
          img: "https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg",
        },
      ],
      slickOptions: {
        slidesToShow: 5,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1580,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      MostSellsSlickOptions: {
        slidesToShow: 4,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
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
