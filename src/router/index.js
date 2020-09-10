import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokesingle from '../components/Pokesingle.vue'
import Pokedex from '../views/Pokedex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/pokemon',
    name: 'Pokesingle',
    component: Pokesingle
  },
]

const router = new VueRouter({
  routes
})

export default router
