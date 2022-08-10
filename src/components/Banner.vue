<template>
  <section>
    <container>
      <div class="flex flex-col justify-center items-center mt-xl">
        <div
          class="bg-white relative shadow-md rounded-b-xl w-full rounded-t-xl overflow-hidden"
        >
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="slideChanged"
            dir="ltr"
          >
            <img
              v-for="(banner, i) in banners"
              :key="i"
              :src="banner.img"
              width="1120"
              height="370"
              class="rounded-t-xl no-pointer-events"
              alt=""
            />
          </slick>
          <div class="grid grid-cols-3 w-full">
            <button
              class="w-full py-md rounded-bl-xl"
              :class="activeBanner === 0 ? `bg-primary text-white` : ''"
              @click="changeSlide(0)"
            >
              Steam Random Keys
            </button>
            <button
              class="w-full py-md"
              :class="activeBanner === 1 ? `bg-primary text-white` : ''"
              @click="changeSlide(1)"
            >
              Super Hydra Randomkey
            </button>
            <button
              class="w-full py-md rounded-br-xl"
              :class="activeBanner === 2 ? `bg-primary text-white` : ''"
              @click="changeSlide(2)"
            >
              STEAM
            </button>
          </div>
          <div
            class="flex px-sm justify-between absolute-center items-center full-width"
            dir="ltr"
          >
            <q-btn
              class="btn-prev"
              icon="chevron_left"
              size="md"
              round
              flat
              color="white"
            />
            <q-btn
              class="btn-next"
              icon="chevron_right"
              size="md"
              round
              flat
              color="white"
            />
          </div>
        </div>
        <div class="mt-xl flex gap-x-5">
          <div
            v-for="(title, i) in titles"
            :key="i"
            class="group flex justify-center items-center hover:duration-500 duration-500 hover:transition-colors transition-colors flex-col w-[170px] h-[80px] shadow-md py-lg rounded-md relative bg-[#fff] hover:bg-primary hover:text-white cursor-pointer"
          >
            <div
              class="flex justify-center items-center absolute group-hover:duration-500 duration-500 group-hover:transition-colors transition-colors top-0 rounded-b-lg bg-gray-50 w-[60px] h-[40px] text-inherit group-hover:bg-primary group-hover:text-white"
            >
              <q-icon
                size="sm"
                class="group-hover:text-white group-hover:duration-500 duration-500 group-hover:transition-colors transition-colors"
                :name="title.icon"
              />
            </div>
            <h2 class="mt-xl">{{ title.name }}</h2>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        fade: true,
        cssEase: "linear",
        nextArrow: ".btn-next",
        prevArrow: ".btn-prev",
      },
      titles: [
        {
          name: "گیفت کارت",
          icon: "card_giftcard",
        },
        {
          name: "بیلزارد گیمز",
          icon: "currency_bitcoin",
        },
        {
          name: "گیفت کارت",
          icon: "card_giftcard",
        },
        {
          name: "گیفت کارت",
          icon: "card_giftcard",
        },
        {
          name: "اپیک گیمز",
          icon: "sports_esports",
        },
        {
          name: "گیفت کارت",
          icon: "card_giftcard",
        },
      ],
      banners: [
        {
          img: "https://bazikey.com/wp-content/uploads/2021/01/MW-II.jpg",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2021/01/Steam-Wallets-1.jpg",
        },
        {
          img: "https://bazikey.com/wp-content/uploads/2021/01/Steam-randomKey.jpg",
        },
      ],
      activeBanner: 0,
    };
  },
  methods: {
    slideChanged(event, slick, currentSlide) {
      this.activeBanner = currentSlide;
    },
    changeSlide(index) {
      this.$refs.slick.goTo(index, false);
      this.activeBanner = index;
    },
  },
};
</script>
<style lang="css"></style>
