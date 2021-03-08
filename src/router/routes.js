import Home from '@/pages/home/Home'
import MyPage from '@/pages/my/My'
import Login from '@/components/Login'
import Discover from '@/pages/discover/Discover'
import Miss from '@/components/Miss'
import routes from './routes'

export default [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/home',
		component: Home,
		meta: {
			authRequired: false,
		},
	},
	{
		path: '/discover',
		component: Discover,
		meta: {
			authRequired: false
		},
	},
	{
		path: '/my',
		component: MyPage,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '*',
		name: 'Miss',
		component: Miss,
	},
]