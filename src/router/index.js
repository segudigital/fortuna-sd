import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Hello
      },
      {
        path: 'quiz',
        name: 'Quiz',
        component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
      },
      // Aun no decido si deberia tener una ruta para cada pregunta [[issue]]
      // {
      //   path: '/pregunta/:id',
      //   name: 'pregunta',
      //   component: () => import(/* webpackChunkName: "foto" */ './views/Prgunta.vue')
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
