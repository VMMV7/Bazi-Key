<template>
  <div class="flex flex-col justify-center items-center">
    <div
      style="border-radius: 50% 100% 100% 50%/69% 75% 75% 69%"
      class="rounded-full p-md w-[50px] h-[50px] flex justify-center items-center text-center"
      :class="`${feature.color}`"
    >
      <q-icon size="28px" class="-mt-[4px]" :name="feature.icon" />
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
