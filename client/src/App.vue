<template>
  <v-app id="app">
    <v-content>
      <app-header></app-header>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";

export default {
  components: {
    appHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
