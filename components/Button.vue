<template>
  <button class="button" @click="handleClick()" @contextmenu.prevent="">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    handleClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  .button {
    padding: 0.3rem 0.6rem;

    border: 1px solid $color__primary;
    border-radius: 2px;

    background-color: $color__primary;

    color: #FFFFFF;
    font-size: 1.2rem;

    cursor: pointer;
  }
</style>
