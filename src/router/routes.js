import Home from '@/pages/home/Home'
import MyPage from '@/pages/my/My'
import Login from '@/components/Login'
import Blog from '@/pages/blog/Blog'
import BlogEdit from '@/pages/blog/components/BlogEdit'
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
		path: '/blog',
		component: Blog,
		meta: {
			authRequired: false
		},
	},
	{
		path: '/blog-edit',
		component: BlogEdit,
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