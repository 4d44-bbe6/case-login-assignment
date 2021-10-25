<template>
  <AccountPage />
</template>

<script>
  import AccountPage from "../components/AccountPage.vue"
  export default {
    components: {
      AccountPage
    },
    middleware({ store, redirect}) {
      if(!store.state.user.email) {
        return redirect('/');
      }
    }
  }
</script>