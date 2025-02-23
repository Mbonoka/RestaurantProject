<template>
    <v-container fluid class="pa-0">
      <!-- Hero Section -->
      <v-container fluid class="hero-section">
        <v-img src="/Moho.svg" height="400px" cover></v-img>
        <!-- Overlaid Image -->
        <div class="overlay-image">
          <v-img src="/Moho(1).svg"></v-img>
        </div>
      </v-container>
  
      <!-- Restaurant Info Section -->
      <v-container class="mt-10">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="text-center py-5">
              <v-avatar size="100">
                <v-img src="/Tacos.jpg" alt="Moho Logo"></v-img>
              </v-avatar>
              <v-card-title class="mt-3">About Moho</v-card-title>
              <v-card-text>
                Welcome to Moho, where flavors meet passion! Located at
                <strong>Ground Floor, Sky Nest Building, Mkungu Close, Off Parklands Road-Nairobi</strong>,
                we serve dishes crafted with love and fresh ingredients.
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                📍 <strong>Location:</strong> Sky Nest Building, Nairobi <br />
                📞 <strong>Call Us:</strong> 0702072425
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Our Philosophy Section -->
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="/meatballs1.jpg" height="300px" class="rounded-lg"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-5">
              <v-card-title>Our Culinary Philosophy</v-card-title>
              <v-card-text>
                At Moho, we blend fresh ingredients with creative flair to craft unique and memorable dishes.
                Every meal tells a story, and we are here to take you on a delicious journey.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Mission & Values Section -->
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-5">
              <v-card-title>Our Mission & Values</v-card-title>
              <v-card-text>
                We strive to create a warm and inviting space where food lovers can gather and enjoy authentic flavors.
                Sustainability, quality, and exceptional service drive everything we do.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/cake1.jpg" height="300px" class="rounded-lg"></v-img>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Hero Text Section (Moved to the Bottom) -->
      <v-container fluid class="hero-text-section">
        <h1 class="hero-title">Welcome to Moho</h1>
        <p class="hero-subtitle">An Experience Beyond Just Dining</p>
      </v-container>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    text-align: center;
    color: white;
  }
  
  /* Fix overlay image position */
  .overlay-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: auto;
    opacity: 0.8;
  }
  
  .hero-text-section {
    text-align: center;
    margin-top: 40px;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-top: 10px;
    color: gray;
  }
  
  .v-card {
    border-radius: 10px;
  }
  
  .v-img {
    border-radius: 10px;
  }
  </style>
  