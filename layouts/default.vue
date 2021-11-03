<template>
  <div class="container">
    <router-link to="/">
      <img src="images/logo.png" alt="Logo 356Werk">
    </router-link>
    <div class="container__content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 620px) {
        width: auto;
        margin-left: 20px;
        margin-right: 20px;
      }
      &__content {
        width: 100%;
        padding: 4rem 3rem;
        border: 1px solid $color__primary;
        border-radius: 2px;
        h1 {
          text-align:  center;
          margin-bottom: 1rem;
        }
      }
  }
</style>
