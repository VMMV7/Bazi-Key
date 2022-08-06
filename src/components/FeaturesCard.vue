<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="rounded-full p-md w-[50px] h-[50px] flex justify-center items-center"
      :class="`${feature.color}`"
    >
      <q-icon class="text-3xl" :name="feature.icon" />
    </div>
    <div class="text-xs mt-sm">{{ feature.title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    feature: Object,
  },
};
</script>
<style lang=""></style>
