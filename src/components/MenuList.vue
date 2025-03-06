<template>
    <v-container>
      <!-- Menu Title -->
      <v-container>
        <v-card color="blue" class="text-center">
          <v-card-title class="text-h3">Our Menu</v-card-title>
        </v-card>
      </v-container>
  
      <!-- Menu Items -->
      <v-card class="mx-auto pa-5" elevation="12">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" v-for="item in menuItems" :key="item.name">
              <v-card color="#D79828">
                <v-img :src="item.image" height="200px" cover></v-img>
                <v-card-title class="text-h5">{{ item.name }}</v-card-title>
                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                <v-card-text>
                  <strong>Price:</strong> KES {{ item.price }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="black" variant="tonal" @click="addToOrder(item)">Order</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  
      <!-- Current Order Section -->
      <v-container class="mt-10">
        <v-card color="blue" class="text-center">
          <v-card-title class="text-h6">Current Order: KES {{ totalOrderAmount }}</v-card-title>
        </v-card>
      </v-container>
  
      <!-- Ordered Items -->
      <v-container v-if="orderItems.length">
        <v-card class="mx-auto pa-5" elevation="12">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" v-for="(item, index) in orderItems" :key="item.name">
                <v-card color="yellow">
                  <v-img :src="item.image" height="200px" cover></v-img>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                  <v-card-text>
                    <strong>Price:</strong> KES {{ item.price }} <br />
                    <strong>Quantity:</strong> {{ item.quantity }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="black" variant="tonal" @click="removeFromOrder(index)">Remove</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <!-- Checkout Button -->
          <v-container class="text-center">
            <v-btn color="green" variant="tonal" @click="confirmOrder">Checkout</v-btn>
          </v-container>
        </v-card>
      </v-container>
  
      <!-- Order Confirmation Dialog -->
      <v-dialog v-model="showConfirmation" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Confirm Your Order</v-card-title>
          <v-card-text>
            <p>Your total is: <strong>KES {{ totalOrderAmount }}</strong></p>
            <p>Would you like to proceed?</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="showConfirmation = false">Cancel</v-btn>
            <v-btn color="green" @click="completeOrder">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Order Receipt -->
      <v-container v-if="showReceipt" class="mt-10">
        <v-card color="grey lighten-3" class="pa-5">
          <v-card-title class="text-h5">Receipt</v-card-title>
          <v-card-text>
            <ul>
              <li v-for="item in receiptItems" :key="item.name">
                {{ item.quantity }}x {{ item.name }} - KES {{ item.price * item.quantity }}
              </li>
            </ul>
            <strong>Total: KES {{ totalOrderAmount }}</strong>
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  // Menu items
  const menuItems = ref([
    { name: "French Fries", price: 250, description: "Best chips in town", image: "/chips2.jpg" },
    { name: "Sausage", price: 100, description: "Best sausages in town", image: "/sausages1.jpg" },
    { name: "Avocado and Egg Toast", price: 400, description: "Scrambling in depth", image: "/food6.jpg" },
    { name: "Pancake Stack", price: 250, description: "Flavourful taste", image: "/pancake1.jpg" },
    { name: "Vanilla cake", price: 450, description: "Best in the game", image: "/cake1.jpg" },
    { name: "Pistachio and Raspberries Cake", price: 400, description: "Unleash into flavour", image: "/cake2.jpg" },
    { name: "Grilled Beef Burger", price: 500, description: "Unbeatable taste", image: "/burger1.jpg" },
    { name: "Vegan Burger", price: 500, description: "New", image: "/burger3.jpg" },
    { name: "Eggs Benedict Burger", price: 500, description: "Tasteful", image: "/Burger2.jpg" },
    { name: "Chicken Burger", price: 500, description: "Unbeatable", image: "/food4.jpg" },
    { name: "Salmon and Zucchini", price: 2500, description: "Best combo in town", image: "/food2.jpg" },
    { name: "Sinful Sip", price: 550, description: "Top-Notch", image: "/wine1.jpg" },
    { name: "Rutini", price: 400, description: "Unhealthy heavenly feeling", image: "/wine5.jpg" },
    { name: "D Vajra Langhe", price: 400, description: "From the Langhe hills", image: "/wine2.jpg" },
  ]);
  
  // Order state
  const orderItems = ref([]);
  const totalOrderAmount = ref(0);
  const showConfirmation = ref(false);
  const showReceipt = ref(false);
  const receiptItems = ref([]);
  
  // Add to order
  function addToOrder(item) {
    const existingItem = orderItems.value.find((order) => order.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      orderItems.value.push({ ...item, quantity: 1 });
    }
    totalOrderAmount.value += item.price;
  }
  
  // Remove from order
  function removeFromOrder(index) {
    if (orderItems.value[index].quantity > 1) {
      orderItems.value[index].quantity -= 1;
    } else {
      orderItems.value.splice(index, 1);
    }
    totalOrderAmount.value -= orderItems.value[index].price;
  }
  
  // Confirm order
  function confirmOrder() {
    showConfirmation.value = true;
  }
  
  // Complete order
  function completeOrder() {
    receiptItems.value = [...orderItems.value];
    orderItems.value = [];
    totalOrderAmount.value = 0;
    showReceipt.value = true;
    showConfirmation.value = false;
  }
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  