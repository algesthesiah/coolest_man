import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home')
const shop = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home/shop')
const car = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home/car')
const user = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home/user')
const category = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home/category')
const find = () =>
  import ( /* webpackChunkName: "home" */ '@/views/home/find')


export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/category',
    component: home,
    children: [{
        path: 'shop',
        name: 'shop',
        component: shop,
      },
      {
        path: 'car',
        name: 'car',
        component: car,
      },
      {
        path: 'user',
        name: 'user',
        component: user,
      },
      {
        path: 'find',
        name: 'find',
        component: find,
      },
      {
        path: 'category',
        name: 'category',
        component: category,
      },
    ]
  }]
})
