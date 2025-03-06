<script setup>
import { ref, onMounted } from "vue";

// Animate text on load
const fadeIn = ref(false);
onMounted(() => {
  setTimeout(() => {
    fadeIn.value = true;
  }, 300);
});
</script>

<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero" :class="{ 'fade-in': fadeIn }">
      <h1>Welcome to Moho</h1>
      <p>An Experience Beyond Just Dining</p>
    </section>

    <!-- Restaurant Info -->
    <section class="grid-container">
      <div class="grid-item">
        <h2>📍 Location</h2>
        <p><strong>Ground Floor, Sky Nest Building, Mkungu Close, Off Parklands Road-Nairobi</strong></p>
        <p>📞 Call Us: 0702072425</p>
      </div>
      <div class="grid-item">
        <h2>🍽️ About Moho</h2>
        <p>At Moho, flavors meet passion! We serve dishes crafted with love and fresh ingredients, creating an unforgettable dining experience.</p>
      </div>
    </section>

    <!-- Our Philosophy -->
    <section class="grid-container">
      <div class="grid-item">
        <h2>🌟 Our Culinary Philosophy</h2>
        <p>We blend fresh ingredients with creative flair to craft unique and memorable dishes. Every meal tells a story, taking you on a delicious journey.</p>
      </div>
      <div class="grid-item">
        <h2>🎯 Our Mission & Values</h2>
        <p>We create a warm and inviting space where food lovers can gather and enjoy authentic flavors. Sustainability, quality, and exceptional service drive everything we do.</p>
      </div>
    </section>

    <!-- Vision, Innovation, Commitment, Impact -->
    <section class="grid-container">
      <div class="grid-item">
        <h2>🔍 Our Vision</h2>
        <p>Redefining the food industry by integrating seamless digital experiences with top-tier cuisine.</p>
      </div>
      <div class="grid-item">
        <h2>🚀 Innovation</h2>
        <p>Our cutting-edge ordering system ensures efficiency, precision, and convenience like never before.</p>
      </div>
      <div class="grid-item">
        <h2>🤝 Commitment</h2>
        <p>We prioritize sustainability, local sourcing, and ethical practices in every dish we serve.</p>
      </div>
      <div class="grid-item">
        <h2>🌍 Global Impact</h2>
        <p>Expanding beyond borders, we’re setting new standards in the culinary world.</p>
      </div>
    </section>

    <!-- Footer -->
    <section class="footer">
      <p>© 2025 Moho. Crafted with passion & precision.</p>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  font-family: "Inter", sans-serif;
  color: #ffffff;
  background: url('your-image-url.jpg') no-repeat center center/cover;
  position: relative;
  padding: 5rem 2rem;
  text-align: center;
  min-height: 100vh;
}

/* Overlay to enhance text readability */
.about-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 0;
}

.about-container * {
  position: relative;
  z-index: 1;
}

.hero {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #eee;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.grid-item {
  background: rgba(34, 34, 34, 0.85);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
}

.grid-item:hover {
  transform: translateY(-5px);
}

.grid-item h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f39c12;
}

.grid-item p {
  font-size: 1rem;
  color: #ddd;
}

.footer {
  margin-top: 4rem;
  font-size: 0.9rem;
  color: #aaa;
}
</style>
