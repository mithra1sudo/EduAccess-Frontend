<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="junior-header" elevation="6">
          <v-card-title class="text-white text-h5">
            📚 Welcome to the Junior Secondary Section!
          </v-card-title>
          <v-card-subtitle class="text-white">
            Dive into interactive lessons and discussions. 🚀
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Learning Modules -->
      <v-col cols="12" md="3">
        <v-card class="modules-card" elevation="4">
          <v-card-title>📖 Learning Modules</v-card-title>
          <v-card-subtitle>Access course materials</v-card-subtitle>
          <v-card-actions>
            <v-btn color="green-darken-2" @click="navigateTo('modules')">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Assignments & Quizzes -->
      <v-col cols="12" md="3">
        <v-card class="assignments-card" elevation="4">
          <v-card-title>📝 Assignments & Quizzes</v-card-title>
          <v-card-subtitle>Complete and submit your tasks</v-card-subtitle>
          <v-card-actions>
            <v-btn color="blue-darken-2" @click="navigateTo('assignments')">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Discussion Forum -->
      <v-col cols="12" md="3">
        <v-card class="forum-card" elevation="4">
          <v-card-title>💬 Discussion Forum</v-card-title>
          <v-card-subtitle>Engage with peers & mentors</v-card-subtitle>
          <v-card-actions>
            <v-btn color="purple-darken-2" @click="navigateTo('forum')">Join</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Progress Tracker -->
      <v-col cols="12" md="3">
        <v-card class="progress-card" elevation="4">
          <v-card-title>📊 Progress Tracker</v-card-title>
          <v-card-subtitle>Monitor your learning progress</v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange-darken-2" @click="navigateTo('progress')">Check</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(section) {
  router.push(`/dashboard/student/junior/${section}`)
}
</script>

<style scoped>
.junior-header {
  background: linear-gradient(135deg, #1565c0, #42a5f5);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.modules-card {
  background: #4caf50;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.assignments-card {
  background: #64b5f6;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.forum-card {
  background: #ab47bc;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.progress-card {
  background: #ff7043;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
</style>
