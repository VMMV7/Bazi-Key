<template>
  <div
    class="bg-gray-100 m-sm p-md rounded-xl w-auto max-w-[550px] overflow-hidden relative"
  >
    <div class="text-sm flex justify-between items-center">
      <div class="text-[14px] font-bold">
        {{ comment.fullname }}
      </div>
      <div class="flex justify-center items-center">
        <div class="ml-sm mb-[2px]">
          <q-rating
            v-model="comment.rate"
            dir="rtl"
            max="5"
            size="16px"
            class="text-amber-400"
            icon="star_outline"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
            readonly
          />
        </div>
        <q-icon
          @click="$emit('selectedComment', comment)"
          class="text-[18px] cursor-pointer"
          name="reply"
        ></q-icon>
      </div>

      <!-- {{ comment.date }} -->
    </div>
    <div class="flex justify-between items-center mt-sm border-t mr-sm pt-sm">
      <div id="message" :class="more ? 'ellipsis-2-lines' : ''">
        {{ comment.message }}
      </div>
    </div>
    <div
      v-if="comment.positive.length > 0 || comment.negative.length > 0"
      class="mt-sm border-t mr-sm pt-sm"
    >
      <div id="two-item" class="grid grid-cols-2">
        <div>
          <div>نقاط قوت</div>
          <div v-for="(p, i) in positive" :key="i" class="mt-xs">
            <q-icon name="add" class="text-[20px] text-green-500 ml-sm" /><span>{{
              p
            }}</span>
          </div>
        </div>
        <div>
          <div>نقاط ضعف</div>
          <div v-for="(n, i) in negative" :key="i" class="mt-xs">
            <q-icon name="remove" class="text-[20px] text-red-500 ml-sm" /><span>{{
              n
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="this.comment.positive.length > 1"
      class="text-xs cursor-pointer absolute left-3 bottom-3"
      @click="more = !more"
    >
      بیشتر...
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: Object,
  },
  methods: {
    // if (this.more) {
    //   this.positive = this.comment.positive.slice(0, 1);
    //   this.negative = this.comment.negative.slice(0, 1);
    //   document.getElementById("message").classList.add("ellipsis");
    // } else {
    //   this.positive = this.comment.positive;
    //   this.negative = this.comment.negative;
    //   document.getElementById("message").classList.remove("ellipsis");
    // }
  },
  computed: {
    positive() {
      if (this.more) {
        return this.comment.positive.slice(0, 1);
        // document.getElementById("message").classList.add("ellipsis");
      } else {
        return this.comment.positive;
      }
    },
    negative() {
      if (this.more) {
        // console.log(document.getElementById("message").classList);
        //  document.getElementById("message").classList.add("ellipsis-2-lines");
        return this.comment.negative.slice(0, 1);
      } else {
        return this.comment.negative;
      }
    },
  },
  data() {
    return {
      more: true,
      // positive: [],
      // negative: [],
    };
  },
};
</script>
<style lang="scss"></style>
