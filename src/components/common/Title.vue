<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="xl:text-5xl md:text-4xl sm:text-3xl text-3xl w-11/12 sm:w-2/4 mb-sm sm:mb-md font-bold" :class="`${color} dark:${darkColor}`">
      {{ title }}
    </h1>
    <h2 class="sm:text-2xl text-xl  w-11/12 sm:w-2/4" :class="`${color} dark:${darkColor}`">
      {{ desc }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
    color: {
      type: String,
      default: "text-black",
    },
    darkColor: {
      type: String,
      default: "text-slate-200",
    },
  },
};
</script>
<style lang="scss"></style>
