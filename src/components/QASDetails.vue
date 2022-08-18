<template>
  <section class="bg-white rounded-lg w-full mt-md p-md" dir="rtl">
    <div class="flex items-center">
      <q-icon name="help_center" class="ml-sm text-[26px]" />
      <div class="text-[16px] font-smibold">پرسش و پاسخ</div>
    </div>
    <div
      v-for="(comment, i) in product.faq"
      class="bg-gray-100 rounded-lg p-md text-sm mt-md"
    >
      <div>
        <div class="flex justify-between items-center border-dashed border-b pb-sm">
          <span class="text-primary">{{ comment.fullname }}</span
          ><span class="bg-white p-xs text-xs rounded-sm">23 اسفند 1400</span>
        </div>
        <div class="text-sm mt-sm">
          {{ comment.question }}
        </div>
      </div>
      <div class="bg-white rounded-lg p-sm text-sm mt-md">
        <div>
          <div class="flex justify-between items-center border-dashed border-b pb-sm">
            <span class="text-primary">پاسخ</span>
          </div>
          <div class="text-sm mt-sm">
            {{ comment.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
<style lang=""></style>
