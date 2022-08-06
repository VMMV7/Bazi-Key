<template>
  <footer class="mt-[100px] text-end">
    <section class="flex justify-between my-xl">
      <div>
        <div class="text-black font-semibold text-sm">ارتباط با ما</div>
        <div class="mt-md">
          <div class="flex">
            <p>اردبیل - خلخال - خیابان پاسداران - اداره فنی و حرفه ای مرکز ۸ - واحد ۱</p>
            <font-icon class=" flex justify-center items-center ml-sm text-lg bg-white w-[35px] px-md  rounded-full" name="map" />
          </div>
          <div class="flex justify-end mt-md">
            <p>09146275884</p>
            <font-icon  name="local_phone" class=" flex justify-center items-center ml-sm text-lg bg-white w-[35px] px-md  rounded-full" />
          </div>
          <div class="flex justify-end mt-md">
            <div class="bg-gray-200 py-xs px-md rounded-md">support@bazikey.com</div>
          </div>
          <div class="flex justify-end mt-md">
            <div class="bg-gray-300 py-xs px-md mr-md rounded-md">Instagram</div>
            <div class="bg-gray-300 py-xs px-md rounded-md">Telegram</div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-black font-semibold text-sm">مجوز ها</div>
        <div class="mt-md">
          <img
            src="https://bazikey.com/wp-content/uploads/2022/01/icon-256x256-1.png"
            alt=""
          />
        </div>
      </div>
      <div class="w-[400px]">
        <div class="flex justify-end mb-sm">
          <div class="text-black font-semibold text-sm">چرا بازی کی ؟</div>
          <div class="bg-primary rounded-full rounded-tr-sm w-[20px] h-[20px] flex justify-center items-center text-center text-white ml-sm">i</div>
        </div>
        <div class="text-md">
          بازی کی توانسته با کسب تجارب فوق العاده در سال های فعالیت خود در روند فروش گیم
          های اورجینال و محصولات گیمینگ ، خود را به یکی از بهترین فروشگاه های کشور تبدیل
          نماید و همواره در تلاش بوده که بهترین فروشگاه برای تمامی گیمران ایرانی باشد !.
          بیشتر بدانید
        </div>
      </div>
      <div>
        <div class="text-black font-semibold text-sm">لینک های کاربردی</div>
        <ul class="mt-sm">
          <li
            class="text-xs my-sm hover:text-primary"
            v-for="(link, i) in links"
            :key="i"
          >
            <nuxt-link to="#">{{ link.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="border-t py-md">
      <div class="flex justify-end text-sm font-bold text-black">
        کلیه حقوق مادی و معنوی برای بازی کی محفوظ می باشد
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  data() {
    return {
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
<style lang=""></style>
