<template>
  <section class="bg-white rounded-lg w-full mt-md p-md" dir="rtl">
    <div class="flex items-center">
      <q-icon name="chat" class="ml-sm text-[26px]" />
      <div class="text-[16px] font-smibold">نظرات کاربران</div>
    </div>
    <div class="flex flex-col no-wrap gap-y-5 mt-md">
      <div v-if="selectedComment">
        <div>در پاسخ به</div>
        <div class="mt-sm">
          <div class="bg-gray-100 p-md rounded-xl w-2/5">
            <div class="text-sm flex justify-between items-center">
              <div class="text-primary text-[16px] font-smibold">
                {{ selectedComment.fullname }}
              </div>
              <q-icon
                @click="selectedComment = null"
                class="text-[16px] cursor-pointer"
                name="close"
              ></q-icon>
            </div>
            <div class="mt-sm border-t mr-sm pt-sm">
              {{ selectedComment.message }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 gap-y-10">
        <q-form ref="commentForm" @submit="onSubmit" @reset="onReset">
          <div class="flex no-wrap gap-x-2">
            <div class="w-3/4">
              <div>نام *</div>
              <div class="mt-sm">
                <q-input
                  :rules="[(val) => !!val || 'فیلد اجباریست']"
                  ref="inputName"
                  rounded
                  outlined
                  v-model="formModel.fullname"
                  :dense="true"
                />
              </div>
            </div>
            <div class="w-3/4">
              <div>ایمیل *</div>
              <div class="mt-sm">
                <q-input
                  rounded
                  ref="emailInput"
                  outlined
                  v-model="formModel.email"
                  :dense="true"
                  dir="ltr"
                  :rules="[(val) => !!val || 'فیلد اجباریست']"
                />
              </div>
            </div>
          </div>
          <div v-if="!selectedComment" class="w-3/5 mt-md">
            <div>امتیاز شما</div>
            <div class="mt-sm">
              <q-rating
                v-model="formModel.rate"
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

          <div v-if="!selectedComment" class="flex no-wrap gap-x-2 mt-md">
            <div class="w-3/4 relative">
              <div class="space-plus">نقاط قوت</div>
              <div class="mt-sm relative">
                <q-input
                  rounded
                  outlined
                  v-model="positiveInput"
                  :dense="true"
                  @keydown.enter.prevent="addPositive"
                />
                <q-icon
                  class="absolute top-2.5 left-2 text-lg bg-primary text-white rounded-full cursor-pointer w-[20px] h-[20px]"
                  name="add"
                  @click="addPositive"
                ></q-icon>
              </div>
              <div
                class="relative mt-md flex justify-center items-center rounded-full w-full border p-sm bg-green-200"
                v-for="(item, i) in formModel.positive"
                :key="i"
              >
                <div class="absolute top-2 left-0">
                  <q-icon
                    name="remove"
                    class="rounded-full bg-green-500 text-white ml-sm w-[20px] h-[20px] cursor-pointer"
                    @click="this.formModel.positive.splice(i, 1)"
                  />
                </div>
                <div>{{ item }}</div>
              </div>
            </div>
            <div class="w-3/4">
              <div class="space-neg">نقاط ضعف</div>
              <div class="mt-sm relative">
                <q-input
                  rounded
                  outlined
                  v-model="negativeInput"
                  :dense="true"
                  @keydown.enter.prevent="addNegative"
                />
                <q-icon
                  class="absolute top-2.5 left-2 text-lg bg-primary text-white rounded-full cursor-pointer w-[20px] h-[20px]"
                  name="add"
                  @click="addNegative"
                ></q-icon>
              </div>
              <div
                v-for="(item, i) in formModel.negative"
                :key="i"
                class="relative mt-md flex justify-center items-center rounded-full w-full border p-sm bg-red-200"
              >
                <div class="absolute top-2 left-0">
                  <q-icon
                    name="remove"
                    class="rounded-full bg-red-500 text-white ml-sm w-[20px] h-[20px] cursor-pointer"
                    @click="this.formModel.negative.splice(i, 1)"
                  />
                </div>
                <div>{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="mt-md">
            <div>دیدگاه شما *</div>
            <div class="mt-sm">
              <q-input
                v-model="formModel.message"
                ref="commentInput"
                outlined
                type="textarea"
                :rules="[(val) => !!val || 'فیلد اجباریست']"
              />
            </div>
          </div>
          <div class="mt-md flex no-wrap q-gutter-x-md">
            <q-btn
              class="rounded-full text-sm q-px-xl"
              color="grey-10"
              label="ثبت"
              type="submit"
            />

            <q-btn
              class="rounded-full text-sm"
              color="grey-10"
              outline
              label="خالی کردن فرم"
              type="reset"
            />
          </div>
        </q-form>
      </div>
    </div>
    <div class="border-b pb-sm text-[16px] mt-xl">دیدگاهها</div>
    <div v-if="rootComments && rootComments.length > 0" class="mt-md w-3/5">
      <div class="comment-card mt-2xl" v-for="(comment, i) in rootComments" :key="i">
        <CommnetCard
          @selected-comment="(c) => (selectedComment = c)"
          :comment="comment"
        />
        <div
          class="comment-replies q-mr-lg"
          v-if="comments.some((cmt) => cmt.parent === comment._id)"
        >
          <h4 class="q-ma-none mb-[-15px] q-pa-none">پاسخ ها:</h4>
          <div
            class="comment-card reply mb-md"
            v-for="(reply, rIndex) in comments.filter(
              (cmt) => cmt.parent === comment._id
            )"
            :key="rIndex"
          >
            <div class="mt-md mr-md bg-gray-100 p-md rounded-xl w-auto max-w-[550px]">
              <div class="text-sm flex justify-between items-center">
                <div class="text-[16px] font-bold">
                  {{ reply.fullname }}
                </div>
              </div>
              <div class="mt-sm border-t mr-sm pt-sm">
                {{ reply.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="bg-primary w-full text-white p-2 text-sm mt-sm">
        هیچ دیدگاهی برای این محصول نوشته نشده است.
      </div>
    </div>
  </section>
</template>
<script>
import CommnetCard from "./CommentCard.vue";
export default {
  data() {
    return {
      formModel: {
        fullname: "amir alahverdi",
        email: "",
        positive: [],
        negative: [],
        message: "",
        rate: 0,
      },
      more: false,
      comments: [],
      selectedComment: null,
      positiveInput: null,
      negativeInput: null,
    };
  },
  computed: {
    rootComments() {
      return this.comments.filter((x) => !x.parent);
    },
  },
  methods: {
    onSubmit() {
      this.$refs.commentForm.validate().then((success) => {
        if (success) {
          let payload = {
            ...this.formModel,
          };
          if (this.selectedComment) {
            payload.parent = this.selectedComment._id;
          }
          this.$api.post(`comments/${this.productId}`, payload).then(({ data }) => {
            this.comments.push(data);
            this.onReset();
          });
        }
      });
    },
    onReset() {
      this.formModel = {
        fullname: "",
        email: "",
        positive: [],
        negative: [],
        message: "",
        rate: 0,
      };
      this.selectedComment = null;
      this.$nextTick(() => {
        this.$refs.commentForm.resetValidation();
      });
    },
    addPositive() {
      this.formModel.positive.push(this.positiveInput);
      this.positiveInput = "";
    },
    addNegative() {
      this.formModel.negative.push(this.negativeInput);
      this.negativeInput = "";
    },
    getComments() {
      this.$api.get(`comments/${this.productId}`).then(({ data }) => {
        this.comments = data;
      });
    },
  },
  created() {
    this.getComments();
  },
  props: {
    productId: String,
  },
  components: {
    CommnetCard,
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
