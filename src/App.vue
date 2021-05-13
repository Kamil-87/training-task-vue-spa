<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import LayoutMain from "./layouts/LayoutMain"
import LayoutAuth from "./layouts/LayoutAuth"

export default {
  components: {LayoutAuth, LayoutMain},
  computed: {
    layout() {
      console.log('layout-' + (this.$route.meta.layout || 'auth'))
      return 'layout-' + (this.$route.meta.layout || 'auth')
    }
  }
}
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
