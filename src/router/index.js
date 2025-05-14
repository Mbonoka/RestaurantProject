import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import FeedbackForm from '@/components/FeedbackForm.vue'

const routes = [
  { path:'/', component: HomePage},
  { path:'/AboutPage', component: AboutPage},
  { path:'/FeedbackForm', component: FeedbackForm },
  
]
 
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router