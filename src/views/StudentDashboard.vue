<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/dashboard/student/primary">
          <v-list-item-icon><v-icon>mdi-gamepad</v-icon></v-list-item-icon>
          <v-list-item-content>Primary Section</v-list-item-content>
        </v-list-item>
        <v-list-item to="/dashboard/student/junior">
          <v-list-item-icon><v-icon>mdi-school</v-icon></v-list-item-icon>
          <v-list-item-content>Junior Secondary</v-list-item-content>
        </v-list-item>
        <v-list-item to="/dashboard/student/senior">
          <v-list-item-icon><v-icon>mdi-book-open-variant</v-icon></v-list-item-icon>
          <v-list-item-content>Senior Secondary</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app color="blue-darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>EduAccess Student Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout" color="red" dark>Logout</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <router-view></router-view> <!-- Displays different sections -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

function logout() {
  localStorage.removeItem('authToken')
  router.push('/login')
}
</script>
