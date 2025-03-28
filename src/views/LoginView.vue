<template>
  <v-main>
    <v-container fluid fill-height class="login-background">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card elevation="10" class="pa-6 rounded-lg">
            <v-form @submit.prevent="handleLogin" ref="form">
              <div class="text-center mb-6">
                <h1 class="text-h4 font-weight-bold teal--text text--darken-2">Welcome Back</h1>
                <p class="text-subtitle-1 mt-2">Log in to your EduAccess account</p>
              </div>
              <v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                :rules="emailRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
                outlined
                dense
              ></v-text-field>
              <div class="d-flex justify-space-between align-center mb-2">
                <v-checkbox
                  v-model="rememberMe"
                  label="Remember me"
                  color="blue-darken-4"
                  hide-details
                  dense
                ></v-checkbox>
                <a href="#" class="teal--text text--darken-2 text-body-2">Forgot password?</a>
              </div>
              <v-btn
                block
                color="blue-darken-4"
                dark
                class="mt-4"
                large
                type="submit"
                :loading="loading"
              >
                Log In
              </v-btn>
              <div class="text-center mt-6">
                <p>
                  Don't have an account?
                  <router-link to="/signup" class="teal--text text--darken-2 font-weight-medium"
                    >Sign Up</router-link
                  >
                </p>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api' // Import API instance

const router = useRouter()

// Form fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const form = ref(null)
const error = ref(null)
const loading = ref(false)

// Validation rules
const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const passwordRules = [v => !!v || 'Password is required']

async function loginUser(credentials) {
  try {
    loading.value = true
    error.value = null // Reset previous error

    const response = await api.post('/login', credentials)

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token)

      // Redirect to dashboard based on role
      if (response.data.user.role === 'student') {
        router.push('/dashboard/student')
      } else if (response.data.user.role === 'mentor') {
        router.push('/dashboard/mentor')
      } else {
        router.push('/dashboard')
      }
    } else {
      error.value = 'Login failed. No token received.'
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed. Please try again.'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}

// Login handler with form validation
async function handleLogin() {
  const isValid = await form.value?.validate()
  if (!isValid) return

  if (!email.value || !password.value) {
    error.value = 'Email and password are required'
    return
  }

  await loginUser({
    email: email.value,
    password: password.value
  })
}
</script>
