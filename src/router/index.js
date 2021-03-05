import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import MyPage from '@/pages/my/My'
import Login from '@/components/Login'
import Miss from '@/components/Miss'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: Home,
			alias: '/',
		},
		{
			path: '/my',
			name: 'My',
			component: MyPage,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '*',
			name: 'Miss',
			component: Miss,
		},
	]
})