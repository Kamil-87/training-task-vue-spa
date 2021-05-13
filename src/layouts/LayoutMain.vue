<template>
  <div class="wrapper-layout">
    <Header />
    <div class="layout">
      <transition name="fade">
        <slot />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  name: 'layout-main',
  components: {Header, Footer, Navbar}
}
</script>

<style scoped>

</style>
