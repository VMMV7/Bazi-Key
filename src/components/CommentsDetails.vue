<template>
  <section class="bg-white rounded-lg w-full mt-md p-md" dir="rtl">
    <div class="flex">
      <font-icon name="chat" class="ml-sm" />
      <div class="text-md font-smibold">نظرات کاربران</div>
    </div>
    <div class="flex flex-col gap-y-5 mt-md">
      <div>
        اولین نفری باشید که دیدگاهی را ارسال می کنید برای “خرید 11500 سکه بازی Apex
        Legends”
      </div>
      <div class="flex gap-x-2 w-2/4">
        <div class="w-full">
          <div>نام *</div>
          <div class="mt-sm">
            <input
              class="border border-gray-200 rounded-full w-full p-[2px] outline-none"
              type="text"
              v-model="formModel.name"
            />
          </div>
        </div>
        <div class="w-full">
          <div>ایمیل *</div>
          <div class="mt-sm">
            <input
              class="border border-gray-200 rounded-full w-full p-[2px]"
              type="email"
              v-model="formModel.email"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      formModel: {
        name: "",
        email: "",
      },
    };
  },
};
</script>