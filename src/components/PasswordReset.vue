<template>
    <v-main>
      <v-container fluid fill-height class="forgot-password-background">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card elevation="10" class="pa-6 rounded-lg">
              <v-form @submit.prevent="handleResetPassword" ref="form">
                <div class="text-center mb-6">
                  <h1 class="text-h4 font-weight-bold teal--text text--darken-2">Forgot Password</h1>
                  <p class="text-subtitle-1 mt-2">Enter your email to reset your password</p>
                </div>
                <v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>
                <v-alert v-if="success" type="success" class="mb-4">{{ success }}</v-alert>
                <v-text-field
                  v-model="email"
                  label="Email"
                  prepend-inner-icon="mdi-email"
                  :rules="emailRules"
                  required
                  outlined
                  dense
                ></v-text-field>
                <v-btn
                  block
                  color="teal darken-2"
                  dark
                  class="mt-4"
                  large
                  type="submit"
                  :loading="loading"
                >
                  Reset Password
                </v-btn>
                <div class="text-center mt-6">
                  <router-link to="../components/StaffLogin.vue" class="teal--text text--darken-2 font-weight-medium">
                    Back to Login
                  </router-link>
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
  import { useAuth } from '../services/auth.service'
  
  const router = useRouter()
  const { resetPassword, loading, error, success } = useAuth()
  
  const email = ref('')
  const form = ref(null)
  
  const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid'
  ]
  
  async function handleResetPassword() {
    const isValid = form.value?.validate()
    if (!isValid) return
  
    try {
      await resetPassword(email.value)
      success.value = 'Password reset link sent to your email.'
    } catch (err) {
      console.error('Password reset failed', err)
    }
  }
  </script>
  <style scoped>
  .forgot-password-background {
    background: url('/background1.jpg') no-repeat center center/cover;
    min-height: 100vh;
    padding: 5rem 2rem;
  }</style>
  