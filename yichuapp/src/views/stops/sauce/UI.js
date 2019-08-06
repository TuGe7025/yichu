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
					rightContent={<div style={{
						width: '22px',
						height: '22px',
						background: 'url(https://www.w3.org/2000/svg) center center /  21px 21px no-repeat' }}
					  />}
					>调味酱料  	
				</NavBar>
				<div className="content">商品</div>
			</div>
		)		
	}
}