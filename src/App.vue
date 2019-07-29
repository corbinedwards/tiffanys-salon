<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <div id="footer-separator" style="height: 150px;"></div>
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  position: relative;
}
</style>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

