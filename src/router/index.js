import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentDashboard from '@/views/StudentDashboard.vue'
import PrimarySection from '@/views/PrimarySection.vue'
import JuniorSection from '@/views/JuniorSection.vue'
import SeniorSection from '@/views/SeniorSection.vue'
import Login from '@/views/LoginView.vue'
import FAQView from '@/views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/features',
      name: '/features',
      component: () => import('../views/FeaturesView.vue'),
    },
    {
      path: '/login',
      name: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/contact',
      name: '/contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/signup',
      name: '/signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/landingpage',
      name: '/landingpage',
      component: () => import('../views/LandingPage.vue')
    },
    { path: '/login', component: Login },
  {
    path: '/dashboard/student',
    component: StudentDashboard,
    children: [
      { path: 'primary', component: PrimarySection },
      { path: 'junior', component: JuniorSection },
      { path: 'senior', component: SeniorSection }
    ]
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true }    // Ensure this exists
  },
  { path: '/faq', component: FAQView } // Ensure this exists
]
 })

export default router
