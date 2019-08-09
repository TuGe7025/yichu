import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class extends Component {

	render () {
		return (
			<div className="box">
				<NavBar
     				 mode="light"
					icon={<Icon type="left" />}
					onLeftClick={(props) => this.props.history.goBack()}
					rightContent={<p className='iconfont icon-gaiicon-'></p>}
					>优惠券  	
				</NavBar>
				<div className="content">优惠券内容</div>
			</div>
		)		
	}
}