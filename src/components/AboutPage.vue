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
            <v-card-title class="text-h3 font-weight-bold">Welcome to Rosé Aura</v-card-title>
            <v-card-subtitle class="text-h5">Your Destination for Beauty and Elegance</v-card-subtitle>
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
          <v-card-title>💄 About Rosé Aura</v-card-title>
          <v-card-text>
            At Rosé Aura, beauty meets passion! We offer premium makeup and skincare products crafted to enhance your
            natural glow and elevate your beauty routine.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>🌟 Our Beauty Philosophy</v-card-title>
          <v-card-text>
            We blend high-quality ingredients with innovative formulas to create makeup and skincare that empower
            confidence. Every product is a step toward timeless beauty.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>🎯 Our Mission & Values</v-card-title>
          <v-card-text>
            We create an inspiring space where beauty lovers can explore and enjoy premium products. Quality,
            inclusivity, and sustainability drive everything we do.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🔍 Our Vision</v-card-title>
          <v-card-text>Redefining the beauty industry by offering seamless shopping experiences and top-tier makeup
            products.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🚀 Innovation</v-card-title>
          <v-card-text>Our cutting-edge online platform ensures effortless browsing, selection, and purchase of beauty
            essentials.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🤝 Commitment</v-card-title>
          <v-card-text>We prioritize cruelty-free products, sustainable sourcing, and ethical practices in every item we
            offer.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title>🌍 Global Impact</v-card-title>
          <v-card-text>Expanding beyond borders, we’re setting new standards in the beauty world with inclusive and
            innovative products.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-6">
      <v-col cols="12" class="text-center">
        <v-card class="pa-3">
          <v-card-text>© 2025 Rosé Aura. Crafted with passion & precision.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-container {
  background: url('/public/Rosé aura.jpg') no-repeat center center/cover;
  min-height: 100vh;
  padding: 5rem 2rem;
}

.hero {
  background: rgba(34, 34, 34, 0.9);
  color: rgb(242, 223, 223);
  border-radius: 10px;
}
</style>