<template>
  <v-container fluid class="feedback-container">
    <v-card class="pa-5" elevation="3">
      <v-card-title class="text-h5 text-center">We Value Your Feedback</v-card-title>
      <v-card-subtitle class="text-center">Tell us about your experience at Moho!</v-card-subtitle>
      
      <v-form ref="feedbackForm" @submit.prevent="submitFeedback">
        <v-text-field v-model="name" label="Your Name" outlined required></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" outlined required></v-text-field>
        
        <v-rating v-model="rating" length="5" color="yellow" size="32"></v-rating>
        
        <v-textarea v-model="message" label="Your Feedback" outlined required></v-textarea>
        
        <v-btn color="blue" block @click="submitFeedback">Submit Feedback</v-btn>
      </v-form>
    </v-card>

    <!-- Display Submitted Feedback -->
    <v-container class="mt-5" v-if="feedbackList.length">
      <v-card v-for="(feedback, index) in feedbackList" :key="index" class="mb-3" outlined>
        <v-card-title>{{ feedback.name }} ({{ feedback.rating }} ★)</v-card-title>
        <v-card-subtitle>{{ feedback.email }}</v-card-subtitle>
        <v-card-text>{{ feedback.message }}</v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const rating = ref(0);
const message = ref('');
const feedbackList = ref([]);

const submitFeedback = () => {
  if (!name.value || !email.value || !message.value) return;
  
  feedbackList.value.push({
    name: name.value,
    email: email.value,
    rating: rating.value,
    message: message.value,
  });
  
  name.value = '';
  email.value = '';
  rating.value = 0;
  message.value = '';
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
.feedback-container {
      background: url('/background1.jpg') no-repeat center center/cover;
      min-height: 100vh;
      padding: 5rem 2rem;
    }
</style>
