import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import MyTeam from '@/views/MyTeam'
import Players from '@/views/Players'
import Research from '@/views/Research'
import TopDrafts from '@/views/TopDrafts'

import Modal from '@/components/globals/Modal'

Vue.use(Router)

// register global components
Vue.component('modal', Modal)

const NotFoundComponent = {
  template: `
  <section class="hero">
    <div class="hero-body">
      <div class="container" style="text-align: center;">
        <h1 class="title">
          Sorry Page Not Found
        </h1>
        <h2 class="subtitle">
          Please try one of the links at the top menu.
        </h2>
      </div>
    </div>
  </section>`
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/myteam',
      component: MyTeam,
    },
    {
      path: '/research',
      component: Research,
    },
    {
      path: '/topdrafts',
      component: TopDrafts,
    },
    {
      path: '/players',
      component: Players,
    },
    { path: '*', component: NotFoundComponent }
  ]
})
