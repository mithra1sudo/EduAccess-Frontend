<template>
  <v-main>
    <v-container fluid fill-height class="signup-background">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card elevation="10" class="pa-6 rounded-lg">
            <v-form @submit.prevent="register" ref="form">
              <div class="text-center mb-6">
                <h1 class="text-h4 font-weight-bold teal--text text--darken-2">
                  Join EduAcces
                </h1>
                <p class="text-subtitle-1 mt-2">
                  Create your account to start your enlightenment journey
                </p>
              </div>

              <v-alert v-if="errorMessage" type="error" class="mb-4">{{ errorMessage }}</v-alert>

              <v-text-field
                v-model="name"
                label="Full Name"
                prepend-inner-icon="mdi-account"
                :rules="[(v) => !!v || 'Name is required']"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="Phone Number"
                prepend-inner-icon="mdi-phone"
                :rules="[
                (v) => !!v || 'Phone number is required',
                (v) => /^[0-9]{10,15}$/.test(v) || 'Enter a valid phone number' ]"
                required
                 outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                :rules="[
                  (v) => !!v || 'Email is required',
                  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                ]"
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
                :rules="[
                  (v) => !!v || 'Password is required',
                  (v) => v.length >= 8 || 'Password must be at least 8 characters',
                ]"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="password_confirmation"
                label="Confirm Password"
                prepend-inner-icon="mdi-lock-check"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                @click:append="showConfirmPassword = !showConfirmPassword"
                :rules="[
                  (v) => !!v || 'Please confirm your password',
                  (v) => v === password || 'Passwords must match',
                ]"
                required
                outlined
                dense
              ></v-text-field>

              <div class="mt-4">
                <v-file-input
                  v-model="userPhoto"
                  :rules="[(v) => !!v || 'Profile picture is required']"
                  accept="image/png, image/jpeg, image/jpg"
                  placeholder="Upload your profile picture"
                  prepend-icon="mdi-camera"
                  label="Profile Picture"
                  show-size
                  counter
                  outlined
                  dense
                ></v-file-input>
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
                Sign Up
              </v-btn>

              <div class="text-center mt-6">
                <p>
                  Already have an account?
                  <router-link to="/login" class="teal--text text--darken-2 font-weight-medium"
                    >Log In</router-link
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
import axios from 'axios'

const router = useRouter()

const form = ref(null) // Add form ref
const name = ref('')  // Add name ref
const phone = ref('') // Add phone number ref
const email = ref('') // Add email ref
const password = ref('') // Add password ref
const password_confirmation = ref('') // Add password confirmation ref
const userPhoto = ref(null) // Add user photo ref
const showPassword = ref(false) // Add show password ref
const showConfirmPassword = ref(false) // Add show confirm password ref
const loading = ref(false) // Add loading ref
const errorMessage = ref('') // Add error message ref

// Define the API base URL - adjust this as needed
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const register = async () => {  // Add register function
  const isValid = form.value.validate() // Validate the form

  if (!isValid) return // Exit if form is not valid

  loading.value = true // Set loading to true
  errorMessage.value = '' // Clear error message

  const formData = new FormData() // Create a new FormData object
  formData.append('name', name.value) // Add name to form data
  formData.append('phone', phone.value) // Add phone number to form data
  formData.append('email', email.value) // Add email to form data
  formData.append('password', password.value) // Add password to form data
  formData.append('password_confirmation', password_confirmation.value) // Add password confirmation to form data

  if (userPhoto.value) { // Add user photo to form data if available
    formData.append('user_photo', userPhoto.value) // Add user photo to form data
  }

  try { // Try to register the user
    const response = await axios.post(`${API_URL}/register`, formData, { // Send a POST request to the API
      headers: { // Set headers
        'Content-Type': 'multipart/form-data', // Set content type
      },
    })

    // Store token in localStorage
    localStorage.setItem('auth-token', response.data.token)

    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify(response.data.user))

    // Navigate to dashboard instead of welcome page
    router.push('/dashboard') // Redirect to dashboard
  } catch (error) { // Handle any errors
    console.error('Registration error:', error) // Log the error

    if (error.response) { // Check if response is available
      if (error.response.data.errors) {// Check if errors are available
        const errors = error.response.data.errors// Get errors
        const firstError = Object.values(errors)[0]// Get first error
        errorMessage.value = firstError[0]// Set error message
      } else {// If no errors are available
        errorMessage.value = error.response.data.message || 'Registration failed. Please try again.'// Set error message
      }
    } else if (error.request) {// Check if request is available
      errorMessage.value = 'No response from server. Please check your connection or server status.'// Set error message
    } else {// If no request is available
      errorMessage.value = 'Network error. Please check your connection.'// Set error message
    }
  } finally {// Finally
    loading.value = false// Set loading to false
  }
}

</script>

<style scoped>
.signup-background {
  background: linear-gradient(to right, #e0f7fa, #b3e5fc);
  min-height: 100vh;
}
</style>
