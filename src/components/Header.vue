<template>
  <header class="header">
    <div class="container header__flex">
      <div>
        <router-link to="/profile" class="header__logo">
          <img src="@/assets/images/user.png" alt="ava">
        </router-link>

      </div>

      <input type="text" placeholder="Найти статью" style="border-bottom: 1px solid darkturquoise">
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background: $colorMain;

  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: block;
    width: 75px;

    img {
      width: 100%;
    }
  }
}
</style>
