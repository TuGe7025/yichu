import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/views/Home';
// 名厨路由
import Chef from '@/views/Chef';
// 社区
import Community from '@/views/Community';
// 集市
import Bazaar from '@/views/Bazaar';
// 个人中心
import User from '@/views/User';
// 404
import NoMatch from '@/views/NoMatch';

const App = () => {
  return (
	<div className = "container">
		<Switch>
			<Route path = '/home' component = { Home } />
			<Route path = '/chef' component = { Chef } />
			<Route path = '/community' component = { Community } />
			<Route path = '/bazaar' component = { Bazaar } />
			<Route path = '/user' component = { User } />
			<Redirect exact from = '/' to = 'home' /> 
			<Route  component = { NoMatch } />
		</Switch>
		<footer className = "footer">
			<ul>
				<NavLink to = "/home">
					<span className = "iconfont icon-shouye1"></span>
					<p>首页</p>
				</NavLink>
				<NavLink to = "/chef">
					<span className = "iconfont icon-tubiao-"></span>
					<p>名厨</p>
				</NavLink>
				<NavLink to = "/community" className = "shequ-box"> 
					<span className = "iconfont icon-hudongshequ"></span>
					<p className = "shequ">社区</p>
				</NavLink>
				<NavLink to = "/bazaar">
					<span className = "iconfont icon-dianpu"></span>
					<p>集市</p>
				</NavLink>
				<NavLink to = "/user">
					<span className = "iconfont icon-yonghu"></span>
					<p>我的</p>
				</NavLink>
			</ul>
		</footer>
	</div>

  );
}

export default App;
