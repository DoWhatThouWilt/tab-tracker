<template>
  <v-toolbar dark class="cyan">
    <v-toolbar-title class="display-1 mr-4">TabTracker</v-toolbar-title>
    <v-toolbar-items>
        <v-btn text class="body-1" to="/">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" text class="red lighten-1 body-1" to="login">Log In</v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" text class="orange lighten-1 body-1" to="register">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>


<style scoped>
</style>