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
					>任务中心  	
				</NavBar>
				<div className="content">任务中心</div>
			</div>
		)		
	}
}