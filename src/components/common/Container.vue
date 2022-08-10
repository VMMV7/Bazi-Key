<template>
  <div :class="wrapClasses">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    fluid: Boolean,
  },
  computed: {
    wrapClasses() {
      return `container${this.fluid ? "" : " px-md xl:px-[200px]"}`;
    },
  },
};
</script>
