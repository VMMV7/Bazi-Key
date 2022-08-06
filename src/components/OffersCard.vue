<template>
  <div class="py-3 bg-white shadow-md rounded-lg w-full h-[360px]">
    <div class="flex justify-center items-center mb-sm">
      <div class="">{{ offer.title }}</div>
    </div>
    <img :src="offer.img" alt="" />
    <div class="mt-sm">
      <div class="flex justify-center items-center gap-x-2">
        <div class="text-sm bg-red-600 text-white px-sm rounded-full">۵۹۱.۰۰۰ تومان</div>
        <div class="text-sm bg-red-600 text-white px-sm rounded-full">۵۹۱.۰۰۰ تومان</div>
      </div>
      <div class="flex text-gray-400 mt-sm ml-sm">
        <q-icon name="schedule" class="mr-sm text-lg text-gray-400" />
        <div>5 hours</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offer: Object,
  },
};
</script>
<style lang=""></style>
