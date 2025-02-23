
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia());
app.mount('#app')
