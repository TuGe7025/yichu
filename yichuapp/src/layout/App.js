import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
// import ReactSVG from 'react-svg';
import Home from '@/views/home';
import Community from '@/views/community';
import Chef from '@/views/chef';
import User from '@/views/user';
import Stops from '@/views/stops';
import NoMatch from '@/views/NoMatch';
// 引入的图标
import shouye1 from '@/images/Icon/shouye1.png';
import tubiao from '@/images/Icon/tubiao-.png';
import dianzan from '@/images/Icon/dianzan.png';
import dianpu from '@/images/Icon/dianpu.png';
import huojian from '@/images/Icon/huojian.png';


const routes = [
	{ path: '/home', component: Home },
	{ path: '/community', component: Community },
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
		<footer className="footer">
			<ul>
        <NavLink to="/home">
          <img className="icon" src={shouye1} alt=""/>
          <p>首页</p>
        </NavLink>
        <NavLink to="/chef">
          <img className="icon" src={tubiao} alt=""/>
          <p>名厨</p>
        </NavLink>
        <NavLink to="/community">
          <img className="icon" src={dianzan} alt=""/>
          <p>社区</p>
       </NavLink>
        <NavLink to="/stops">
          <img className="icon" src={dianpu} alt=""/> 
          <p>集市</p>
       </NavLink>
        <NavLink to="/user">
          
        {/* <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye1"></use>
        </svg> */}
            <img className="icon" src={huojian} alt=""/>
          {/* <span className = "iconfont icon-weibiaoti2fuzhi12"></span> */}
          <p>我的</p>
        </NavLink>
      </ul>
		</footer>
	</div>
)
	
	