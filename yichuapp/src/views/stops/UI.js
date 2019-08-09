import React, { Component } from 'react';
import Bazaar from '@/components/stops/bazaar';
import './shop.scss';

import { NavLink } from 'react-router-dom';
export default class extends Component {
	render () {
		return (
			<div className="box">
				<header className="header">
					<h1>易厨优品</h1>
				</header>
				<div className="content">
					<div>
						<ul className="shoplist" style={{display:'flex',width:'100%',height:'0.44rem',justifyContent:'space-around',alignItems:'center'}}>
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