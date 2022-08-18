<template>
  <footer dir="rtl" class="bg-grey-1 pt-xl">
    <container fluid>
      <section class="row q-col-gutter-x-lg q-col-gutter-y-md no-wrap justify-between">
        <div class="col-auto" style="width: 300px; max-width: 100%">
          <div class="space text-black font-semibold text-sm">لینک های کاربردی</div>
          <ul class="mt-sm">
            <li
              class="text-xs my-sm hover:text-primary"
              v-for="(link, i) in links"
              :key="i"
            >
              <router-link to="#">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="flex mb-sm">
            <div
              class="bg-primary rounded-full rounded-tr-sm w-[20px] h-[20px] flex justify-center items-center text-center text-white ml-sm"
            >
              i
            </div>
            <div class="text-black font-semibold text-sm">چرا بازی کی؟</div>
          </div>
          <div class="text-md">
            بازی کی توانسته با کسب تجارب فوق العاده در سال های فعالیت خود در روند فروش گیم
            های اورجینال و محصولات گیمینگ ، خود را به یکی از بهترین فروشگاه های کشور تبدیل
            نماید و همواره در تلاش بوده که بهترین فروشگاه برای تمامی گیمران ایرانی باشد !.
            بیشتر بدانید
          </div>
        </div>
        <div class="col-auto" style="width: 300px; max-width: 100%">
          <div class="space text-black font-semibold text-sm">مجوز ها</div>
          <slick class="mt-sm" ref="slick" :options="slickOptions" dir="ltr">
            <div style="width: 200px; height: 140px">
              <div class="flex justify-center items-center">
                <img src="namad.png" alt="namad" width="128" height="140" />
              </div>
            </div>
            <div style="width: 200px; height: 140px">
              <div class="flex justify-center items-center">
                <img src="samandehi.png" alt="samandehi" width="128" height="140" />
              </div>
            </div>
          </slick>
        </div>
        <div class="col">
          <div class="text-black font-semibold text-sm">ارتباط با ما</div>
          <div class="mt-md">
            <div class="flex">
              <q-icon
                class="flex justify-center items-center ml-sm text-lg bg-white w-[35px] px-sm rounded-full"
                name="map"
              />
              <p>
                اردبیل - خلخال - خیابان پاسداران - اداره فنی و حرفه ای مرکز ۸ - واحد ۱
              </p>
            </div>
            <div class="flex mt-md">
              <q-icon
                name="local_phone"
                class="flex justify-center items-center ml-sm text-lg bg-white w-[35px] px-sm rounded-full"
              />
              <p>09146275884</p>
            </div>
            <div class="flex mt-md">
              <div class="bg-gray-200 py-xs px-md rounded-md">support@bazikey.com</div>
            </div>
            <div class="flex mt-md">
              <div
                class="bg-gray-300 py-xs px-md rounded-md cursor-pointer hover:bg-blue-300 hover:text-white"
              >
                Telegram
              </div>
              <div
                class="bg-gray-300 py-xs px-md mr-sm rounded-md cursor-pointer hover:bg-red-300 hover:text-white"
              >
                Instagram
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="border-t py-md">
        <div class="flex text-xs text-black">
          کلیه حقوق مادی و معنوی برای بازی کی محفوظ می باشد
        </div>
      </section>
    </container>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: false,
      },
      links: [
        {
          title: "اعتماد به بازی کی",
        },
        {
          title: "پیگیری سفارش",
        },
        {
          title: "قوانین و مقررات",
        },
        {
          title: "سوالات متداول",
        },
        {
          title: "ثبت شکایت",
        },
        {
          title: "بازی مگ",
        },
        {
          title: "درباره ما",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.space {
  &::before {
    width: 5px;
    height: 5px;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    content: "";
    border-radius: 2px;
    background-color: #8224e3;
  }
}
</style>
