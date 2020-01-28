import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import mainView from '@/views/mainView/mainVisual.vue'
import otherView from '../views/2.vue'

const routes = [
	{
	  path:'',
	  redirect:'/1'
	},
	{
	  path:'/1',
	  component:mainView
	},
	{
	  path:'/2',
	  component:otherView
	}
]

const router = new VueRouter({
  routes,
  mode:'hash'
})

export default router
