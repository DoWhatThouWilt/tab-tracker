<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input type="password" mame="password" v-model="password" placeholder="password" />
    <br />
    <button @click="register">Register</button>
    <br>
    <div class="error" v-html="error" />
    <br>
  </div>
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
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: firebrick;
}
</style>
