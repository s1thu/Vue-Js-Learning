import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/EventListView.vue'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    //   //loaded only when they are needed
    // },
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      // props object mode
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView
    }
  ]
})

export default router
