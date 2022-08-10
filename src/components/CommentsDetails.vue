<template>
  <section class="bg-white rounded-lg w-full mt-md p-md" dir="rtl">
    <div class="flex items-center">
      <q-icon name="chat" class="ml-sm text-lg" />
      <div class="text-lg font-smibold">نظرات کاربران</div>
    </div>
    <div class="flex flex-col no-wrap gap-y-5 mt-md">
      <div>
        اولین نفری باشید که دیدگاهی را ارسال می کنید برای “خرید 11500 سکه بازی Apex
        Legends”
      </div>
      <div class="w-2/5 gap-y-10">
        <div class="flex no-wrap gap-x-2">
          <div class="w-3/4">
            <div>نام *</div>
            <div class="mt-sm">
              <q-input rounded outlined v-model="text" :dense="true" />
            </div>
          </div>
          <div class="w-3/4">
            <div>ایمیل *</div>
            <div class="mt-sm">
              <q-input rounded outlined v-model="text" :dense="true" />
            </div>
          </div>
        </div>
        <div class="w-3/5 mt-md">
          <div>امتیاز شما</div>
          <div class="mt-sm">
            <q-rating
              v-model="model2"
              dir="rtl"
              max="5"
              size="24px"
              class="text-amber-400"
              icon="star_outline"
              icon-selected="star"
              icon-half="star_half"
              no-dimming
            />
          </div>
        </div>
        <div class="flex no-wrap gap-x-2 mt-md">
          <div class="w-3/4">
            <div class="space-plus">نقاط قوت</div>
            <div class="mt-sm">
              <q-input rounded outlined v-model="text" :dense="true" />
            </div>
          </div>
          <div class="w-3/4">
            <div class="space-neg">نقاط ضعف</div>
            <div class="mt-sm">
              <q-input rounded outlined v-model="text" :dense="true" />
            </div>
          </div>
        </div>
        <div class="mt-md">
          <div>دیدگاه شما *</div>
          <div class="mt-sm">
            <q-input v-model="text" outlined type="textarea" />
          </div>
        </div>
        <div class="mt-md w-1/5">
          <q-btn class="w-full rounded-full text-sm" color="grey-10" label="ثبت" />
        </div>
      </div>
    </div>
    <div class="border-b pb-sm text-[16px] mt-xl">دیدگاهها</div>
    <div v-if="!comments">
      <div class="bg-primary w-full text-white p-2 text-sm mt-sm">
        هیچ دیدگاهی برای این محصول نوشته نشده است.
      </div>
    </div>
    <div v-if="comments" class="mt-md w-3/5">
      <div v-for="(comment, i) in comments" :key="i">
        <div class="bg-gray-100 p-md rounded-xl w-auto max-w-[550px]">
          <div class="text-sm">
            <span class="text-primary text-[16px] font-smibold">{{ comment.name }}</span>
            {{ comment.date }}
          </div>
          <div class="mt-sm border-t mr-sm pt-sm">
            {{ comment.opinion }}
          </div>
        </div>
        <div class="mt-md mr-lg">
          <div class="text-[16px] font-bold">پاسخها</div>
          <div
            v-for="(answer, index) in comment.answers"
            :key="index"
            class="mt-md mr-md bg-gray-100 p-md rounded-xl w-auto max-w-[550px]"
          >
            <div class="text-sm">
              <span class="text-primary text-[16px] font-smibold">{{ answer.name }}</span>
              {{ answer.date }}
            </div>
            <div class="mt-sm border-t mr-sm pt-sm">
              {{ answer.opinion }}
            </div>
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
      comments: [
        {
          name: "amir alahverdi",
          opinion:
            "عالییییی هستن رندوم کی ها مخصوصا قیمت هاشون پیشنهاد میکنم حتما برای خرید",
          date: "تاریخ 29 شهریور , 1399",
          answers: [
            {
              name: "amir jafar",
              opinion: "خواهش میکنم ممنون از لطفتون",
              date: "تاریخ 29 شهریور , 1399",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.space-plus {
  &::before {
    width: 7px;
    height: 7px;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    content: "";
    border-radius: 2px;
    background-color: #88ecb9;
  }
}
.space-neg {
  &::before {
    width: 7px;
    height: 7px;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    content: "";
    border-radius: 2px;
    background-color: #ff9d9d;
  }
}
</style>
