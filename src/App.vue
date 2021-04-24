<template>
  <div id="app">
    <Navbar />
    <div class="wrapper-layout">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>

<style lang="scss">

</style>
