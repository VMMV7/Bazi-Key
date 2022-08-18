<template>
  <div
    class="bg-white shadow-md rounded-lg p-sm q-mx-auto"
    dir="rtl"
    style="max-width: 300px; min-width: 280px"
  >
    <router-link :to="`details/`">
      <q-img
        :src="product.img"
        width="100%"
        height="auto"
        alt=""
        style="max-width: 100%"
      />
    </router-link>

    <div class="mt-md">
      <div class="flex flex-col">
        <div class="text-sm text-green-600">{{ product.price.toMoney() }}</div>
        <div class="text-sm ellipsis mt-xs">
          <router-link :to="`details/`">{{ product.title }}</router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-between mb-xs mt-md">
      <div class="text-gray-500">
        <router-link to="#"><q-icon class="text-lg" name="shopping_cart" /></router-link>
        <router-link class="mr-sm" to="#"
          ><q-icon class="text-lg" name="favorite_border"
        /></router-link>
      </div>
      <div>
        <q-rating
          v-model="product.rate"
          dir="rtl"
          max="5"
          size="20px"
          class="text-yellow-400"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          readonly
          no-dimming
        />
      </div>
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
