import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Menu from '@/components/MenuList.vue'
import Order from '@/components/OrderPage.vue'
import RestaurantList from '@/components/ReservationList.vue'
import BookingForm from '@/components/BookingForm.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactUs from '@/components/ContactUs.vue'
import FeedbackForm from '@/components/FeedbackForm.vue'
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/AboutPage',
    component: AboutPage
  },
  {
    path:'/BookingForm',
    component: BookingForm
  },
  {
    path:'/ContactUs',
    component: ContactUs
  },
  {
    path:'/FeedbackForm',
    component: FeedbackForm
  },
  {
    path:'/MenuList',
    component: Menu
  },
  {
    path:'/OrderPage',
    component: Order
  },
  {
    path:'/RestaurantList',
    component: RestaurantList
    }

]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router