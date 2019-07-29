import React, { Component } from 'react';

export default class extends Component {
	constructor (props) {
		super(props);
		this.state = {}
	}
	render () {
		return (
			<div className = "box">
				<header className = "header">首页头部</header>
				<div className = "content">
					首页内容
				</div>
			</div>
		)
	}
}