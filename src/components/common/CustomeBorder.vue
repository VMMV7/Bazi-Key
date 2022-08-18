<template>
  <div class="flex items-center q-mb-md" dir="rtl">
    <div class="flex-none">
      <slot>
        <span class="flex justify-center items-center gap-x-2">
          <q-icon class="text-xl text-gray-600" :name="icon" />
          <div class="font-medium text-gray-600 text-[18px]">{{ title }}</div>
        </span>
      </slot>
    </div>
    <div class="flex-auto px-sm">
      <div class="grow border-b-2 mt-[5px] border-gray-300 border-dotted w-full"></div>
    </div>
    <div class="flex-none"><slot name="more" /></div>
    <!-- <nuxt-link
      :to="link"
      v-if="link"
      class="text-xs bg-gray-200 rounded-xl hover:bg-gray-600 hover:text-white px-sm cursor-pointer min-w-[85px] max-w-[100px]"
    >
      مشاهده همه
    </nuxt-link> -->
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    icon: String,
    link: String,
  },
};
</script>
