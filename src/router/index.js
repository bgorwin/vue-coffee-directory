import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/austin',
		name: 'Austin',
		component: () => import('../views/Austin.vue')
	},
	{
		path: '/dallas',
		name: 'Dallas',
		component: () => import('../views/Dallas.vue')
	},
	{
		path: '/sanfrancisco',
		name: 'San Francisco',
		component: () => import('../views/SanFrancisco.vue')
	},
	{
		path: '/losangeles',
		name: 'Los Angeles',
		component: () => import('../views/LosAngeles.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
