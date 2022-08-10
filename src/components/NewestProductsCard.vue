<template>
  <div
    class="flex justify-between bg-white flex-col shadow-md rounded-lg w-full px-md pt-md pb-sm cursor-pointer"
    dir="rtl"
  >
    <div class="relative">
      <div
        style="border-radius: 50% 100% 100% 50% / 69% 75% 75% 69%"
        class="bg-red-600 text-white absolute top-0 right-0 w-[35px] h-[35px] flex justify-center items-center text-center"
      >
        <span>{{ product.discount }}%</span>
      </div>
      <img :src="product.img" class="px-sm" width="247" height="296" alt="" />

      <div class="mt-md text-end">
        <div class="flex justify-end">
          <div class="text-sm">
            تومان
            <span class="text-primary"> {{ product.maxPrice }} </span>
          </div>
          /
          <div class="text-sm">
            تومان
            <span class="text-primary"> {{ product.minPrice }}</span>
          </div>
        </div>
        <div>{{ product.name }}</div>
      </div>
    </div>
    <div class="flex mb-xs mt-md">
      <router-link to="#"><q-icon class="text-lg" name="shopping_cart" /></router-link>
      <router-link class="mr-sm" to="#"
        ><q-icon class="text-lg" name="favorite_border"
      /></router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
<style lang=""></style>
