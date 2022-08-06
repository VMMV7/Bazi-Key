<template>
  <div id="sidebar" class="h-full overflow-y-auto scroll-smooth relative pr-4" style="width: 180px;">
    <nav class="pt-3 pl-4 pr-14 pb-12 px-3 h-full pb-20 text-gray-600 dark:text-gray-500">
      <router-link
        v-bind="linkAttrs"
        to="/tickets">
        Tickets
      </router-link>
      <router-link
        v-bind="linkAttrs"
        to="/tickets2">
        Tickets
      </router-link>
      <router-link
        v-bind="linkAttrs"
        to="/tickets3">
        Tickets
      </router-link>
      <router-link
        v-bind="linkAttrs"
        to="/tickets2">
        Tickets
      </router-link>
      <router-link
        v-bind="linkAttrs"
        to="/tickets4">
        Tickets
      </router-link>
      <router-link
        v-bind="linkAttrs"
        to="/tickets5">
        Tickets
      </router-link>
      <div class="bottom-0 left-0 right-0 absolute pl-4 pr-14 py-4">
        <div class="my-4 pt-px dark:bg-gray-800 bg-gray-200"></div>
        <label for="dark-mode">
          <input id="dark-mode" v-model="dark" class="rounded text-primary" type="checkbox" />
          Dark Mode
        </label>
      </div>
    </nav>
    <div ref="resizer" class="resizer-x" @mousedown.prevent="initResize">
      <div class="h-full pr-2 flex">
        <div class="h-full border-l absolute z-0 border-gray-200 dark:border-gray-800"></div>
        <div class="flex items-center pl-1 h-full z-10">
          <span class="w-1.5 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import themeMixin from '~/mixins/themeMixin'

export default {
  name: 'Sidebar',
  mixins: [themeMixin],
  data() {
    return {
      linkAttrs: {
        class: `relative py-md flex items-center py-3 text-base rounded-sm transition ease-in-out hover:text-gray-900 dark-hover:text-gray-50`,
        exact: true,
        activeClass: 'text-black dark:text-white font-bold'
      }
    }
  },
  methods: {
    initResize(e) {
      window.addEventListener('mousemove', this.Resize, false)
      window.addEventListener('mouseup', this.stopResize, false)
    },
    Resize(e) {
      if (!this.$refs) return
      const sidebar = this.$el
      const value = e.pageX - sidebar.getBoundingClientRect().left
      sidebar.style.width = Math.min(Math.max(value, 180), 400) + 'px'
    },
    stopResize(e) {
      window.removeEventListener('mousemove', this.Resize, false)
      window.removeEventListener('mouseup', this.stopResize, false)
    }
  },
  beforeDestroy() {
    this.stopResize()
  }
}
</script>
<style lang="scss">
.resizer-x {
  min-width: 4px;
  height: 100%;
  right: 0;
  bottom: 0;
  top: 0;
  position: absolute;
  cursor: w-resize;
}
</style>
