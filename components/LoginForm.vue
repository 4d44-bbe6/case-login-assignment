<template>

  <div>
      <div v-if="user.email">
        <p>Je bent al ingelogged. <NuxtLink to="/account">Klik hier om je accountpagina te openen.</NuxtLink></p>
      </div>
      <div v-else>
        <h1>Log in</h1>
        <InputField v-model="form.email" name="email" label="E-mail"   />
        <InputField v-model="form.password" name="password" label="Wachtwoord" type="password" />
        <p><NuxtLink to="#">Wachtwoord vergeten</NuxtLink></p>
        <Button :handle-click="submit">Inloggen</Button>
        <p>Heb je nog geen account? <NuxtLink to="#">Schrijf je dan in</NuxtLink></p>
        <div v-if="errors.length">
          <FormNotifications :notifications="errors" />
        </div>
      </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import InputField from "./InputField.vue";
  import Button from "./Button.vue";
  import FormNotifications from "./FormNotifications.vue"

  export default {
    components: {
      InputField,
      Button,
      FormNotifications
    },
    data() {
      return {
        user: {},
        form: {
          email: '',
          password: '',
        },
        errors: []
      }
    },
    mounted() {
      this.user = this.$store.getters.me
    },
    methods: {
        ...mapActions({
          login: 'setUser' 
        }),
        async submit() {
          this.validateForm()
          if(this.errors.length === 0) {
            const authenticated = await this.login(this.form)
            if(!authenticated) this.errors.push("Logingegevens zijn incorrect.") 
          }
        },
        validateForm() {
          this.errors = []
          if(!this.form.email) {
            this.errors.push("Voer je e-mailadres in om in te kunnen loggen.")
          } else if (!this.validateEmail(this.form.email)) {
            this.errors.push("Dit is een ongeldig mailadres.")
          }
          if(!this.form.password) {
            this.errors.push("Voer je wachtwoord in om te kunnen loggen.")
          }
        },
        validateEmail(value) {
           if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) 
             return true
        }
    },
  }
</script>

