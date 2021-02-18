import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import AdminProducts from '../views/AdminProducts.vue'
import BuyView from '../views/BuyView.vue'
import MakeOrder from '../views/MakeOrder.vue'
import OrderDone from '../views/OrderDone.vue'
import Products from '../views/Products.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/AdminProducts',
    name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/BuyView',
    name: 'BuyView',
    component: BuyView
  },
  {
    path: '/MakeOrder',
    name: 'MakeOrder',
    component: MakeOrder
  },
  {
    path: '/OrderDone',
    name: 'OrderDone',
    component: OrderDone
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
