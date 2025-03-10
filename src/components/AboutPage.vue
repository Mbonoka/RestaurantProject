<script setup>
import { ref, onMounted } from "vue";

const fadeIn = ref(false);
onMounted(() => {
  setTimeout(() => {
    fadeIn.value = true;
  }, 300);
});
</script>

<template>
  <v-container fluid class="about-container">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-fade-transition>
          <v-card class="pa-6 elevation-4 hero" v-if="fadeIn">
            <v-card-title class="text-h3 font-weight-bold">Welcome to Moho</v-card-title>
            <v-card-subtitle class="text-h5">An Experience Beyond Just Dining</v-card-subtitle>
          </v-card>
        </v-fade-transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>📍 Location</v-card-title>
          <v-card-text>
            <strong>Ground Floor, Sky Nest Building, Mkungu Close, Off Parklands Road-Nairobi</strong>
            <br />
            📞 Call Us: 0702072425
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>🍽️ About Moho</v-card-title>
          <v-card-text>
            At Moho, flavors meet passion! We serve dishes crafted with love and fresh ingredients, creating an unforgettable dining experience.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>🌟 Our Culinary Philosophy</v-card-title>
          <v-card-text>
            We blend fresh ingredients with creative flair to craft unique and memorable dishes. Every meal tells a story, taking you on a delicious journey.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>🎯 Our Mission & Values</v-card-title>
          <v-card-text>
            We create a warm and inviting space where food lovers can gather and enjoy authentic flavors. Sustainability, quality, and exceptional service drive everything we do.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🔍 Our Vision</v-card-title>
          <v-card-text>Redefining the food industry by integrating seamless digital experiences with top-tier cuisine.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🚀 Innovation</v-card-title>
          <v-card-text>Our cutting-edge ordering system ensures efficiency, precision, and convenience like never before.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🤝 Commitment</v-card-title>
          <v-card-text>We prioritize sustainability, local sourcing, and ethical practices in every dish we serve.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🌍 Global Impact</v-card-title>
          <v-card-text>Expanding beyond borders, we’re setting new standards in the culinary world.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-6">
      <v-col cols="12" class="text-center">
        <v-card class="pa-3">
          <v-card-text>© 2025 Moho. Crafted with passion & precision.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-container {
  background: url('/background1.jpg') no-repeat center center/cover;
  min-height: 100vh;
  padding: 5rem 2rem;
}
.hero {
  background: rgba(34, 34, 34, 0.9);
  color: rgb(242, 223, 223);
  border-radius: 10px;
}
</style>
