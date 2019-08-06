import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ReactSVG from 'react-svg';
import Home from '@/views/home';
import find from '@/views/community/find';
import Chef from '@/views/chef';
import User from '@/views/user';
import Stops from '@/views/stops';
import NoMatch from '@/views/NoMatch';
import Footer from '@/components/Footer'; // 底部

const routes = [
	{ path: '/home', component: Home },
	{ path: '/comy/find', component: find },
	{ path: '/chef', component: Chef },
	{ path: '/stops', component: Stops },
	{ path: '/user', component: User }
]
export default () => (
	<div className ="container">
		<Switch>
			{
				routes.map((item, index) => (
					<Route key = {index} path = {item.path} component = {item.component}></Route>
				))
      }
			<Redirect to='/home' from='/' exact />
			<Route component={ NoMatch } />
		</Switch>
		<Footer />
	</div>
)
	
	