export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
]
