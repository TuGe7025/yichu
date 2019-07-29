import React, { Component } from 'react';

export default class extends Component {
	constructor (props) {
		super(props);
		this.state = {}
	}
	render () {
		return (
			<div className = "box">
				<header className = "header">个人中心头部</header>
				<div className = "content">
					个人中心内容
				</div>
			</div>
		)
	}
}