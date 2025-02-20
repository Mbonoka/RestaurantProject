<template>
    <v-container>
        <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
            <v-card class="mx-auto" elevation="24">
              <v-container>

                 <v-row>
                    <v-col cols="12" md="4" v-for="item in menuItems" :key=item>
                       <v-card>
                            <v-card color="#D79828">
                                <v-card-item>
                                    <v-card-title>Chocolate Milkshake</v-card-title>
                                        <v-card-subtitle> velvety chocolate ice cream with creamy milk </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="/shake3.jpg" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>

                          <v-card color="#C18A3E">
                                <v-card-item>
                                <v-card-title>Chips</v-card-title>
    
                                <v-card-subtitle>Best chips in town</v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash" cover ></v-img>
    
                                <v-card-text> 200 </v-card-text>
                            </v-card><br><br>
                            <v-card color="brown">
                                <v-card-item>
                                    <v-card-title>Sausage</v-card-title>
                                        <v-card-subtitle>Best sausages in town </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>
                            <v-card color="#D79828">
                                <v-card-item>
                                    <v-card-title>Chocolate Milkshake</v-card-title>
                                        <v-card-subtitle> velvety chocolate ice cream with creamy milk </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="/shake3.jpg" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>
                            <v-card color="#D79828">
                                <v-card-item>
                                    <v-card-title>Chocolate Milkshake</v-card-title>
                                        <v-card-subtitle> velvety chocolate ice cream with creamy milk </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="/shake3.jpg" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>
                            <v-card color="#D79828">
                                <v-card-item>
                                    <v-card-title>Chocolate Milkshake</v-card-title>
                                        <v-card-subtitle> velvety chocolate ice cream with creamy milk </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="/shake3.jpg" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>
                            <v-card color="#D79828">
                                <v-card-item>
                                    <v-card-title>Chocolate Milkshake</v-card-title>
                                        <v-card-subtitle> velvety chocolate ice cream with creamy milk </v-card-subtitle>
                                </v-card-item>
                                <v-img height="300px" src="/shake3.jpg" cover ></v-img>
                                <v-card-text> 450 </v-card-text>
                            </v-card><br><br>





                        </v-card>
                     </v-col>
                     </v-row>
                </v-container>
            </v-card>
    </v-container>
</template>
<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },

    {
        name: "Avocado and Egg Toast",
        price: 400,
        description: "Best combo in town",
        size: "None",
        offers: "None",
        image: "/food6.jpg"
    },
    {
        name: "Salmon and Zucchini",
        price: 2500,
        description: "Best combo in town",
        size: "None",
        offers: "None",
        image: "/food2.jpg"
    },
    {
        name: "Pancake Stack",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "/pancake.jpg"
    },
    {
        name: "Vanilla cake",
        price: 450,
        description: "Unleash into our vanilla cake",
        size: "None",
        offers: "None",
        image: ""
    },

    {
        name: "pistachio and raspberries cake",
        price: 400,
        description: "Best combo in town",
        size: "None",
        offers: "None",
        image: "/food6.jpg"
    },
    {
        name: "Salmon and Zucchini",
        price: 1500,
        description: "Best combo in town",
        size: "None",
        offers: "None",
        image: "/food2.jpg"
    }
    
    
]
</script>