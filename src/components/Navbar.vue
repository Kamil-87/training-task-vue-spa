<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/auth">Auth</router-link> |
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
nav {
  color: $colorText;
}
</style>
