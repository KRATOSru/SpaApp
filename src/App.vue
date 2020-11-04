<template>
    <v-app id="inspire">
      <v-navigation-drawer temporary v-model="drawer" app>
      </v-navigation-drawer>

      <v-app-bar app dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link one</v-btn>
        </v-toolbar-items>

      </v-app-bar>

      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>


<script>
  export default {
    name: "App",
    data: () => ({ drawer: null }),
  }
</script>

<style scoped>

</style>
