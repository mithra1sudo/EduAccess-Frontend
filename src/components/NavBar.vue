<template>
  <v-app-bar color="blue-darken-4" elevation="2" rounded>
    <!--Logo and Title-->
          <v-toolbar-title  class="d-flex align-center">
        <v-btn icon>
        <v-icon>mdi-school</v-icon>
      </v-btn>
      <router-link to="/" class="text-white text-decoration-none">EduAccess</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!--Navigation Links-->
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/features">Features</v-btn>
      <v-btn text to="/contact">Contact Us</v-btn>


      <v-spacer></v-spacer>

     <!--Auth Buttons-->
    <v-btn outlined color="white" to="/login">Login</v-btn>
    <v-btn class="ml-2" color="yellow darken-2" dark to="/signup">Sign Up</v-btn>
  </v-app-bar>
</template>

<style>
nav-item:hover {
  color: teal;
}

/* Hover Effect - Animated Underline */
.nav-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background: teal;
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover::after {
  width: 100%;
}
</style>


