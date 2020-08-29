import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login/Login.vue"
import Search from "../pages/Search/Search.vue"
import MSite from "../pages/MSite/MSite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
Vue.use(VueRouter);
const routes =[
  {
    path:'/login',
    component:Login
  },
  {
    path:'/msite',
    component:MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/order',
    component:Order,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/',
    redirect:'/msite'
  },
]
const router = new VueRouter({
  routes
})
export default router