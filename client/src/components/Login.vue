<template>
  <v-row align="start" justify="center">
    <v-col cols="6">
      <v-card class="white elevation-6">
        <v-toolbar flat dense color="red lighten-2" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="email"
              label="Email"
              type="email"
              name="email"
              v-model="email"
              filled
            />
            <v-text-field
              prepend-icon="lock"
              id="password"
              label="Password"
              type="password"
              name="password"
              v-model="password"
              filled
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn x-large color="red lighten-2" dark @click="login">Login</v-btn>
        </v-card-actions>
        <div class="error" v-html="error" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/*eslint no-unused-vars: "off"*/

import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
</style>
