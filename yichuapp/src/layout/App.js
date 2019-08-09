import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ReactSVG from 'react-svg';
import Home from '@/views/home';
// import find from '@/views/community/find';
import Comy from '@/layout/Comy';
import Chef from '@/views/chef';
import User from '@/views/user';
import Stops from '@/views/stops';
import NoMatch from '@/views/NoMatch';
import Footer from '@/components/Footer'; // 底部

export default () => (
	<div className ="container">
		<Switch>
			<Route path = '/home' component = {Home}></Route>
			<Route path = '/comy' component = {Comy}></Route>
			<Route path = '/chef' component = {Chef}></Route>
			<Route path = '/stops' component = {Stops}></Route>
			<Route path = '/user' component = {User}></Route>
			<Redirect to='/home' from='/' exact />
			<Route component={ NoMatch } />
		</Switch>
		<Footer />
	</div>
)
	
	