<template>
  <container fluid>
    <section class="bg-white rounded-lg w-full mt-md p-md flex no-wrap gap-x-4">
      <div class="flex-none">
        <img :src="product.image.large" width="500" height="500" alt="" />
      </div>
      <div class="flex-col flex-auto">
        <div class="bg-gray-100 w-full p-sm text-black">
          <div>{{ product.name }}</div>
          <div class="flex gap-x-[20px] mt-sm text-[12px]">
            <div>شناسه محصول: <span class="text-primary">81</span></div>
            <div>دسته: <span class="text-primary">Apex Legends Coin, Origin</span></div>
          </div>
        </div>
        <div class="flex border-dashed border-t mt-sm pt-sm gap-x-4">
          <div class="text-[12px] w-2/4">
            <div>
              {{ product.showDesc }}
            </div>
            <div class="border-dashed border p-sm mt-md">
              {{ product.notice }}
            </div>
          </div>
          <div class="flex flex-col justify-center items-center flex-auto">
            <div class="border-dashed border flex py-sm w-full justify-center rounded-md">
              <div class="text-primary ml-xs">
                {{ product.maxPrice.toMoney() }}
              </div>
            </div>
            <div
              class="bg-gray-100 flex gap-x-2 mt-sm p-sm justify-center items-center border w-[270px] rounded-md"
            >
              <input
                class="border p-sm w-[90px] text-xs rounded-md"
                value="1"
                type="Number"
              />
              <div class="flex bg-primary text-white p-sm text-xs rounded-md">
                <font-icon name="add_shopping_cart" class="text-lg text-white ml-sm" />
                <div>افزودن به سبد خرید</div>
              </div>
            </div>
            <div
              class="flex gap-x-2 mt-sm p-sm justify-center text-xs items-center border rounded-md group hover:bg-primary hover:text-white cursor-pointer"
            >
              <q-icon
                class="text-lg group-hover:bg-primary group-hover:text-white"
                name="favorite_border"
              />
              <div class="group-hover:bg-primary">افزودن به علاقه مندی ها</div>
            </div>
            <div class="flex text-xs mt-md">
              <div class="border-dashed border-r px-sm">
                آیا قیمت مناسب‌تری سراغ دارید؟
              </div>
              <span class="ml-sm border-dashed border-b">بلی</span>
              <span class="ml-sm border-dashed border-b">خیر</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </container>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
<style lang=""></style>
