<template>
  <div class="flex justify-between bg-white border rounded-lg p-sm text-[17px]">
    <div><q-icon class="text-xl text-gray-600" name="shopping_basket" /></div>
    <div class="flex justify-center items-center">
      <div class="flex mx-sm">
        <router-link class="mr-xs" to="#">پول بازی</router-link>
        <div><q-icon name="paid" class="text-xl text-gray-600" /></div>
      </div>
      <div class="flex mx-sm">
        <router-link class="mr-xs" to="#">گیفت کارت ها</router-link>
        <div><q-icon name="card_giftcard" class="text-xl text-gray-600" /></div>
      </div>

      <div class="flex mx-sm">
        <router-link class="mr-xs" to="#">فروشگاه</router-link>
        <div><q-icon name="storefront" class="text-xl text-gray-600" /></div>
      </div>
      <div class="flex mx-sm">
        <router-link class="mr-xs" to="#">صفحه اصلی</router-link>
        <div><q-icon name="home" class="text-xl text-gray-600" /></div>
      </div>
    </div>
  </div>
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
