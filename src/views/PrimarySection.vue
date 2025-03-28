<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="primary-header" elevation="6">
          <v-card-title class="text-white text-h5">
            🎮 Welcome to the Primary Section!
          </v-card-title>
          <v-card-subtitle class="text-white">
            Fun and interactive learning awaits you! 🚀
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Gamified Learning -->
      <v-col cols="12" md="4">
        <v-card class="game-card" elevation="4">
          <v-card-title>🕹️ Gamified Learning</v-card-title>
          <v-card-subtitle>Learn through fun challenges!</v-card-subtitle>
          <v-card-actions>
            <v-btn color="green-darken-2" @click="navigateTo('games')">Play Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Progress Tracking -->
      <v-col cols="12" md="4">
        <v-card class="progress-card" elevation="4">
          <v-card-title>📊 Progress Tracker</v-card-title>
          <v-card-subtitle>See how you're doing!</v-card-subtitle>
          <v-card-actions>
            <v-btn color="blue-darken-2" @click="navigateTo('progress')">View Progress</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Quizzes -->
      <v-col cols="12" md="4">
        <v-card class="quiz-card" elevation="4">
          <v-card-title>❓ Fun Quizzes</v-card-title>
          <v-card-subtitle>Test your knowledge!</v-card-subtitle>
          <v-card-actions>
            <v-btn color="red-darken-2" @click="navigateTo('quizzes')">Take Quiz</v-btn>
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
  router.push(`/dashboard/student/primary/${section}`)
}
</script>

<style scoped>
.primary-header {
  background: linear-gradient(135deg, #ff8c00, #ffcc00);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.game-card {
  background: #ffeb3b;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.progress-card {
  background: #64b5f6;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.quiz-card {
  background: #e57373;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}
</style>
