<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="senior-header" elevation="6">
          <v-card-title class="text-white text-h5">
            🎓 Welcome to the Senior Secondary Section!
          </v-card-title>
          <v-card-subtitle class="text-white">
            Prepare for exams, engage with mentors, and plan your future! 🚀
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Advanced Learning Modules -->
      <v-col cols="12" md="3">
        <v-card class="modules-card" elevation="4">
          <v-card-title>📚 Learning Modules</v-card-title>
          <v-card-subtitle>Access advanced study materials</v-card-subtitle>
          <v-card-actions>
            <v-btn color="green-darken-2" @click="navigateTo('modules')">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Mentorship Sessions -->
      <v-col cols="12" md="3">
        <v-card class="mentorship-card" elevation="4">
          <v-card-title>🎤 Mentorship Sessions</v-card-title>
          <v-card-subtitle>Get guidance from experienced mentors</v-card-subtitle>
          <v-card-actions>
            <v-btn color="blue-darken-2" @click="navigateTo('mentorship')">Join</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Exam Prep & Past Papers -->
      <v-col cols="12" md="3">
        <v-card class="exam-card" elevation="4">
          <v-card-title>📝 Exam Prep & Past Papers</v-card-title>
          <v-card-subtitle>Revise with past exams</v-card-subtitle>
          <v-card-actions>
            <v-btn color="red-darken-2" @click="navigateTo('exams')">Start Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Career Guidance & Forums -->
      <v-col cols="12" md="3">
        <v-card class="career-card" elevation="4">
          <v-card-title>💬 Career Guidance & Forums</v-card-title>
          <v-card-subtitle>Plan your future career path</v-card-subtitle>
          <v-card-actions>
            <v-btn color="purple-darken-2" @click="navigateTo('career')">Discover</v-btn>
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
  router.push(`/dashboard/student/senior/${section}`)
}
</script>

<style scoped>
.senior-header {
  background: linear-gradient(135deg, #1e88e5, #1976d2);
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

.mentorship-card {
  background: #64b5f6;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.exam-card {
  background: #e53935;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.career-card {
  background: #8e24aa;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
</style>
