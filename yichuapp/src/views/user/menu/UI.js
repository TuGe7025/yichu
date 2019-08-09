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
					>帖子与菜谱路由  	
				</NavBar>
				<div className="content">帖子与菜谱路由内容</div>
			</div>
		)		
	}
}