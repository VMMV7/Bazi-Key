<template>
  <div class="bg-white p-sm rounded-md">
    <img
      class="rounded-bl-[30px] rounded-md w-full"
      :src="news.img"
      width="256"
      height="170"
      alt=""
    />
    <div class="flex justify-between mt-md">
      <div class="text-primary flex justify-center items-center flex-col font-bold">
        <div class="text-lg">{{ news.day }}</div>
        <div class="text-xs mt-[-8px]">
          <div>{{ news.mount }}</div>
          <div>{{ news.year }}</div>
        </div>
      </div>
      <div class="text-md">{{ news.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    news: Object,
  },
};
</script>
<style lang="scss"></style>
