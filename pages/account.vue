<template>
  <div>
    <h1>Account</h1>
    <p>Naam: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Telefoon: {{ user.phone }}</p>
    <Button :handle-click="logoutUser">
      Uitloggen
    </Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '~/components/Button.vue'
export default {
  components: {
    Button
  },
  layout: 'Layout',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.user = this.$store.getters['authentication/me']
  },
  methods: {
    ...mapActions({
      logoutUser: 'authentication/logoutUser'
    }),
    submit () {
      this.logoutUser()
    }
  }
}
</script>

<style lang="scss">
  .title {
    margin-bottom: 1rem;
    color: $color__primary;
    text-align: center;
  }
</style>
