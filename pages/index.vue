<template>
  <p v-if="user.email">
    Je bent al ingelogged. <NuxtLink to="/account">
      Klik hier om je accountpagina te openen.
    </NuxtLink>
  </p>
  <div v-else>
    <h1>
      Log in
    </h1>
    <form @submit.prevent="submit">
      <InputField v-model="form.email" name="email" label="E-mail" />
      <InputField v-model="form.password" name="password" label="Wachtwoord" type="password" />
      <p>
        <NuxtLink to="#">
          Wachtwoord vergeten
        </NuxtLink>
      </p>
      <Button>
        Inloggen
      </Button>
    </form>
    <p>
      Heb je nog geen account? <NuxtLink to="#">
        Schrijf je dan in
      </NuxtLink>
    </p>
    <FormNotifications v-if="errors.length" :notifications="errors" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputField from '~/components/InputField.vue'
import Button from '~/components/Button.vue'
import FormNotifications from '~/components/FormNotifications.vue'
export default {
  components: {
    InputField,
    Button,
    FormNotifications
  },
  data () {
    return {
      user: {},
      form: {
        email: '',
        password: ''
      },
      errors: []
    }
  },

  mounted () {
    this.user = this.$store.getters['authentication/me']
  },
  methods: {
    ...mapActions('authentication', ['setUser']),
    async submit () {
      this.validateForm()
      if (this.errors.length === 0) {
        const authenticated = await this.setUser(this.form)
        if (!authenticated) { this.errors.push('Logingegevens zijn incorrect.') }
      }
    },
    validateForm () {
      this.errors = []
      if (!this.form.email) {
        this.errors.push('Voer je e-mailadres in om in te kunnen loggen.')
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.push('Dit is een ongeldig mailadres.')
      }
      if (!this.form.password) {
        this.errors.push('Voer je wachtwoord in om te kunnen loggen.')
      }
    },
    validateEmail (value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) { return true }
    }
  }
}
</script>
