import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tools',
      component: require('@/components/Tools').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
