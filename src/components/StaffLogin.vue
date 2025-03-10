<template>
    <v-main>
<h1>Staff Login</h1>
<v-form>
    <v-text-field
        v-model= "email"
        label= "Email"
        required
    ></v-text-field>
    <v-text-field
    v-model="password"
    label="Password"
    required
    ></v-text-field>
<v-btn 
color="primary"
@click="login"
>Login</v-btn>
</v-form>
    </v-main>
    </template>
<script setup>

</script>