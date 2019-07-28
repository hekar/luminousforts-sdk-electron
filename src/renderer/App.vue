<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'ssdk-2013-electron',
    created () {
      this.$vuetify.theme.dark = false
    }
  }
</script>

<style>
  /* CSS */
</style>
