<template>
  <container fluid>
    <section
      class="flex justify-between bg-white border rounded-lg p-sm text-[14px]"
      dir="rtl"
    >
      <div class="flex justify-center items-center">
        <div class="flex mx-sm">
          <div><q-icon name="home" class="text-lg text-gray-600" /></div>
          <router-link class="mr-xs" to="#">صفحه اصلی</router-link>
        </div>
        <div class="flex mx-sm">
          <div><q-icon name="storefront" class="text-lg text-gray-600" /></div>
          <router-link class="mr-xs" to="#">فروشگاه</router-link>
        </div>
        <div class="flex mx-sm">
          <div><q-icon name="card_giftcard" class="text-lg text-gray-600" /></div>
          <router-link class="mr-xs" to="#">گیفت کارت ها</router-link>
        </div>
        <div class="flex mx-sm">
          <div><q-icon name="paid" class="text-lg text-gray-600" /></div>
          <router-link class="mr-xs" to="#">پول بازی</router-link>
        </div>
      </div>
      <div><q-icon class="text-lg text-gray-600" name="shopping_basket" /></div>
    </section>
  </container>
</template>
<script>
import FontIcon from "./common/FontIcon.vue";
export default {
  components: {
    FontIcon,
  },
};
</script>
<style lang=""></style>
