<template>
  <ul class="notifications">
    <li
      v-for="(notification, index) in notifications"
      :key="index"
      class="notifications__item"
    >
      {{ notification }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" >
  .notifications {
    margin-top: 2rem;
    padding: 2rem;

    border: 1px solid red;
    border-radius: 2px;

    list-style: none;

    &__item {
      width: 100%;

      color: red;
      font-weight: 500;
    }
  }
</style>
