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
    this.user = this.$store.getters.me
  },
  methods: {
    ...mapActions({
      logoutUser: 'logoutUser'
    }),
    submit () {
      this.logoutUser()
    }
  }
}
</script>
