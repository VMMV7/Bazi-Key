<template>
  <div class="bg-white rounded-md flex justify-between p-ms text-right" dir="rtl">
    <div class="flex">
      <div>
        <img
          src="https://bazikey.com/wp-content/uploads/2018/06/Bronze-4.jpg"
          width="70"
          height="70"
          alt=""
        />
      </div>
      <div class="text-sm mr-sm">
        <div>{{ product.title }}</div>
        <div class="mt-sm text-green-600">{{ product.price.toMoney() }}</div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="mt-xs">5</div>
      <q-icon class="text-yellow-400 text-lg" name="star_border" />
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
