<template>
    <v-container fluid class="homepage-container">
        <!-- Carousel with Search Bar Overlay -->
        <v-card class="mx-auto mb-6 carousel-card" elevation="24" style="max-width: 800px; position: relative;">
            <v-carousel hide-delimiters height="300">
                <v-carousel-item src="/public/Rosé aura.jpg" cover></v-carousel-item>
                <v-carousel-item src="/public/display1.jpg" cover></v-carousel-item>
                <v-carousel-item src="/public/display2.jpg" cover></v-carousel-item>
                <v-carousel-item src="/public/display3.jpg" cover></v-carousel-item>
            </v-carousel>
            <!-- Search Bar -->
            <v-text-field v-model="searchQuery" label="Search Beauty Products" prepend-inner-icon="mdi-magnify"
                variant="outlined" clearable class="search-bar" @input="filterMenuItems"></v-text-field>
        </v-card>

        <!-- Menu Items -->
        <v-container>
            <v-card color="blue" class="text-center mb-6">
                <v-card-title class="text-h3">Our Beauty Products</v-card-title>
            </v-card>
            <v-card class="mx-auto pa-5" elevation="12">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4" v-for="item in filteredMenuItems" :key="item.name">
                            <v-card color="#D79828">
                                <v-img :src="item.image" height="200px" cover></v-img>
                                <v-card-title class="text-h5">{{ item.name }}</v-card-title>
                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                                <v-card-text>
                                    <strong>Price:</strong> KES {{ item.price }}
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="black" variant="tonal" @click="addToCart(item)">Order</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-container>

        <!-- Footer -->
        <v-footer class="bg-dark text-white py-8">
            <v-container>
                <v-row>
                    <!-- Brand -->
                    <v-col cols="12" sm="6" md="3">
                        <v-card flat color="transparent">
                            <v-card-title class="text-h6 font-weight-bold">Rosé Aura</v-card-title>
                            <v-card-text>
                                Redefining the beauty industry by offering seamless shopping experiences and top-tier makeup products.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Navigation -->
                    <v-col cols="12" sm="6" md="3">
                        <v-card flat color="transparent">
                            <v-card-title class="text-h6">Quick Links</v-card-title>
                            <v-card-text>
                                <v-btn variant="text" color="white" href="/">Home</v-btn><br>
                                <v-btn variant="text" color="white" href="/about">About Us</v-btn><br>
                                <v-btn variant="text" color="white" href="/FeedbackForm">Feedback</v-btn><br>
                               
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Contact Info -->
                    <v-col cols="12" sm="6" md="3">
                        <v-card flat color="transparent">
                            <v-card-title class="text-h6">Contact Us</v-card-title>
                            <v-card-text>
                                Email: support@roseaura.co.ke<br>
                                Phone: +25411 223 367<br>
                                Nairobi, Kenya
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Social Media -->
                    <v-col cols="12" sm="6" md="3">
                        <v-card flat color="transparent">
                            <v-card-title class="text-h6">Follow Us</v-card-title>
                            <v-card-text>
                                <v-btn icon href="https://facebook.com" target="_blank" color="white">
                                    <v-icon>mdi-facebook</v-icon>
                                </v-btn>
                                <v-btn icon href="https://twitter.com" target="_blank" color="white">
                                    <v-icon>mdi-twitter</v-icon>
                                </v-btn>
                                <v-btn icon href="https://www.instagram.com/gadgetdenkenya" target="_blank"
                                    color="white">
                                    <v-icon>mdi-instagram</v-icon>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Bottom Line -->
                <v-divider class="my-4" color="grey"></v-divider>
                <v-card-text class="text-center grey--text">
                    © {{ new Date().getFullYear() }} Rosé Aura. All rights reserved.
                </v-card-text>
            </v-container>
        </v-footer>

        <!-- Cart Section at Page End -->
        <v-card class="cart-section" elevation="12">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card-title class="text-h6">Your Cart</v-card-title>
                        <v-divider></v-divider>
                        <v-list v-if="cartItems.length">
                            <v-list-item v-for="(item, index) in cartItems" :key="item.name">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        KES {{ item.price }} x {{ item.quantity }} = KES {{ item.price * item.quantity
                                        }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn icon color="red" @click="removeFromCart(index)" aria-label="Remove item">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold">
                                        Total: KES {{ totalOrderAmount }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                                <v-btn color="green" block variant="tonal" @click="confirmOrder"
                                    :disabled="!cartItems.length">
                                    Checkout
                                </v-btn>
                            </v-card-actions>
                        </v-list>
                        <v-card-text v-else>
                            Your cart is empty.
                        </v-card-text>
                    </v-col>
                </v-row>
                <!-- Receipt -->
                <v-row v-if="showReceipt">
                    <v-col cols="12">
                        <v-card class="pa-4" elevation="12">
                            <v-card-title class="text-h6">Receipt</v-card-title>
                            <v-divider></v-divider>
                            <v-list>
                                <v-list-item v-for="item in receiptItems" :key="item.name">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ item.quantity }}x {{ item.name }} - KES {{ item.price * item.quantity }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="font-weight-bold">
                                            Total: KES {{ totalReceiptAmount }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-btn color="blue" block variant="tonal" @click="resetOrder">New Order</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

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
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

// Menu items (Beauty Products)
const menuItems = ref([
    { name: "Curology Lotion", price: 1000, description: "Nourishes and hydrates all skin types", image: "/pic13.jpg" },
    { name: "Bioglow Sunscreen", price: 1500, description: "Long-lasting sunscreen", image: "/pic14.jpg" },
    { name: "Orange Blush", price: 2000, description: "Adds volume and shine to hair", image: "/pic15.jpg" },
    { name: "Miss Swiss Brushes", price: 1800, description: "Softt and Gentle on the skin", image: "/pic17.jpg" },
    { name: "Curology Brushes", price: 4500, description: "Premium Feeling", image: "/pic2.jpg" },
    { name: "Miss Swiss lip gloss", price: 1200, description: "For long wear", image: "/pic3.jpg" },
    { name: "Curology foundation", price: 2200, description: "Has a UV protection", image: "/pic4.jpg" },
    { name: "Eye Shadow Pallete", price: 800, description: "everyday wear", image: "/pic5.jpg" },
    { name: "Kiki Lipglossr", price: 1900, description: "glossy finish", image: "/pic7.jpg" },
    { name: "Loreal Brushes", price: 2800, description: "Soft feeling", image: "/pic8.jpg" },
    { name: "Milano Brush", price: 1000, description: "Smooth application, smudge-proof", image: "/pic9.jpg" },
    { name: "Lip Glow", price: 1600, description: "Deeply hydrates and revitalizes lips", image: "/pic12.jpg" },
    { name: "Kiki Lipstick holder", price: 1700, description: "Easier storage", image: "/pic11.jpg" },
    { name: "Skims Lipstick", price: 6000, description: "Long-lasting ", image: "/pic12.jpg" }
]);

// Search functionality
const searchQuery = ref('');
const filteredMenuItems = ref([...menuItems.value]);

function filterMenuItems() {
    const query = searchQuery.value.toLowerCase();
    filteredMenuItems.value = menuItems.value.filter(item =>
        item.name.toLowerCase().includes(query)
    );
}

// Cart functionality
const cartItems = ref([]);
const cartDrawer = ref(true); // Kept for potential toggling, but not used
const showConfirmation = ref(false);
const showReceipt = ref(false);
const receiptItems = ref([]);

function addToCart(item) {
    const existingItem = cartItems.value.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.value.push({ ...item, quantity: 1 });
    }
}

function removeFromCart(index) {
    const item = cartItems.value[index];
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cartItems.value.splice(index, 1);
    }
}

// Compute total order amount
const totalOrderAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

// Compute total receipt amount (for display after checkout)
const totalReceiptAmount = computed(() => {
    return receiptItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

// Confirm order
function confirmOrder() {
    if (cartItems.value.length) {
        showConfirmation.value = true;
    }
}

// Complete order
function completeOrder() {
    receiptItems.value = [...cartItems.value];
    cartItems.value = [];
    showReceipt.value = true;
    showConfirmation.value = false;
}

// Reset order to start new
function resetOrder() {
    showReceipt.value = false;
    receiptItems.value = [];
}
</script>

<style scoped>
.homepage-container {
    background: url('/public/Rosé aura.jpg') no-repeat center center/cover;
    min-height: 100vh;
    padding: 2rem;
}

.carousel-card {
    position: relative;
}

.search-bar {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
}

.bg-dark {
    background-color: #111;
}

.cart-section {
    margin-top: 2rem;
    max-height: 400px;
    overflow-y: auto;
    background-color: white;
}
</style>