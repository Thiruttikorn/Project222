import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/LoginForm.vue'
import LogoutView from '../views/LogoutView.vue'
import 'tailwindcss/tailwind.css';



const routes = [{
  path: '/login',
  name: 'login',
  component: LoginForm
},
{
  path: '/home',
  name: 'home',
  component: HomeView
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
},
{
  path: '/logout',
  name: 'logout',
  component: LogoutView
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router