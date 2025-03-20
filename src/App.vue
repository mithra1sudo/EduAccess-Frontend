<template>
  <v-app>
    <Navbar/>
    <v-content>
      <RouterView/>
    </v-content>
    <FooterBar/>
  </v-app>
</template>

<script setup>
//Imports from components
import {RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>
