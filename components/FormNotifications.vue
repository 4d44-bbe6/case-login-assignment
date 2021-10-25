<template>
  <ul class="container">
    <li v-for="(notification, index) in notifications" :key="index">
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

<style lang="scss" scoped>
  .container {
    margin-top: 2rem;
    padding: 2rem;
    border: 1px solid red;
    border-radius: 2px;
    text-align: left;
    li {
      width: 100%;
      color: red;
      font-weight: 500;
    }
  }
</style>