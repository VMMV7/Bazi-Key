<template>
  <span :class="tagClasses">{{ name }}</span>
</template>

<script setup>
const props = defineProps({
  name: String,
  color: String,
  darkColor: String,
});

const textColor = props.color ? props.color : "text-gray-800";
const textDarkColor = "dark:" + (props.darkColor ? props.darkColor : "text-gray-50");
const tagClasses = `material-symbols-outlined ${textColor} ${textDarkColor}`;
</script>
