<template>
  <div
    class="flex bg-white flex-col shadow-md rounded-lg w-full px-md pt-md pb-sm cursor-pointer"
    dir="rtl"
  >
    <div class="flex justify-center items-center flex-col">
      <img
        src="https://bazikey.com/wp-content/uploads/2018/06/Silver-3-247x296.jpg"
        class="px-sm"
        width="247"
        height="296"
        alt=""
      />
    </div>

    <div class="mt-md">
      <div class="flex">
        <div class="text-sm">
          تومان
          <span class="text-primary">20000</span>
        </div>
        <div class="text-sm">خرید بازی PlayerUnknow’s BattleGround</div>
      </div>
    </div>
    <div class="flex justify-between mb-xs mt-md">
      <div>
        <router-link to="#"><q-icon class="text-lg" name="shopping_cart" /></router-link>
        <router-link class="mr-sm" to="#"
          ><q-icon class="text-lg" name="favorite_border"
        /></router-link>
      </div>
      <div>
        <q-rating
          v-model="model2"
          dir="rtl"
          max="5"
          size="20px"
          color="yellow"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          no-dimming
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
