<template>
  <div class="container">
    <Header />
    <Menu />
    <Directory />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import Directory from "../components/Directory.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "defaultLayout",
  components: {
    Header,
    Menu,
    Directory,
    Footer,
  },
};
</script>
<style lang="scss">
</style>
