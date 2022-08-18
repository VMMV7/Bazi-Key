<template>
  <div
    class="relative bg-white shadow-md rounded-lg p-sm q-mx-auto"
    dir="rtl"
    style="max-width: 212px"
  >
    <div
      style="border-radius: 50% 100% 100% 50% / 69% 75% 75% 69%; z-index: 1"
      class="bg-red-600 text-white absolute top-3 right-3 w-[35px] h-[35px] flex justify-center items-center text-center"
    >
      <span>%{{ product.discount }}</span>
    </div>
    <div>
      <router-link :to="`details/${product._id}`">
        <q-img
          :src="product.image.medium"
          class="px-sm"
          width="100%"
          height="auto"
          alt=""
          style="max-width: 100%"
      /></router-link>
    </div>

    <div class="mt-md text-end">
      <div class="flex justify-end">
        <div class="text-sm">
          <span class="text-green-600"> {{ product.maxPrice.toMoney() }} </span>
        </div>
        <span class="mx-[2px]">/</span>
        <div class="text-sm">
          <span class="text-green-600"> {{ product.minPrice.toMoney() }}</span>
        </div>
      </div>
      <div class="ellipsis text-left" dir="ltr">
        <router-link :to="`details/${product._id}`">{{ product.name }}</router-link>
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
