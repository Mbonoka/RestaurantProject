<template>
  <v-app-bar color="blue" app>
   
    <v-toolbar-title class="white--text font-weight-bold">Moho Restaurant</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="!mobile" to="/" color="white" text>Home</v-btn>
    <v-btn v-if="!mobile" to="/AboutPage" color="white" text>About</v-btn>
    <v-btn v-if="!mobile" to="/FeedbackForm" color="white" text>Feedback</v-btn>
   
    

    <!-- Mobile Dropdown Menu -->
    <v-menu v-if="mobile" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/"> <v-list-item-title>Home</v-list-item-title> </v-list-item>
        <v-list-item to="/AboutPage"> <v-list-item-title>About</v-list-item-title> </v-list-item>
        <v-list-item to="/FeedbackForm"> <v-list-item-title>Feedback</v-list-item-title> </v-list-item>
       
       
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const mobile = ref(false)

const checkScreenSize = () => {
  mobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})
</script>
