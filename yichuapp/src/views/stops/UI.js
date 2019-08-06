import React, { Component } from 'react';
import Bazaar from '@/components/stops/bazaar';
import './shop.scss';
// 引入的路由
import Sauce from '@/views/stops/sauce';//酱料
import Ware from '@/views/stops/ware';//餐具
import Bake from '@/views/stops/bake';//烘焙
import Appliance from '@/views/stops/appliance';//电器
import Foods from '@/views/stops/foods';//美食

import { NavLink, Switch, Route} from 'react-router-dom';
export default class extends Component {
	render () {
		return (
			<div className="box">
				<header className="header">
					<h1>易厨优品</h1>
				</header>
				<div className="content">
					<Switch>
						<Route path='/carts/sauce' component={Sauce}/>
						<Route path='/carts/ware' component={ Ware } />
						<Route path='/carts/bake' component={ Bake } />
						<Route path='/carts/appliance' component={ Appliance } />
						<Route path='/carts/foods' component={ Foods } />
					</Switch>
					<div>
						<ul style={{display:'flex',width:'100%',height:'0.44rem',justifyContent:'space-around',alignItems:'center'}}>
							<NavLink to='/carts/sauce'>调味酱料</NavLink>
							<NavLink to='/carts/ware'>厨具</NavLink>
							<NavLink to='/carts/bake' >烘焙</NavLink>
							<NavLink to='/carts/appliance'>厨房电器</NavLink>
							<NavLink to='/carts/foods'>精选美食</NavLink>
						</ul>
					</div>
					<Bazaar />
				</div>
			</div>
		)		
	}
}