import React, { Component } from 'react';

export default class extends Component {
	constructor (props) {
		super(props);
		this.state = {}
	}
	render () {
		return (
			<div className = "box">
				<header className = "header">社区头部</header>
				<div className = "content">
					社区内容
				</div>
			</div>
		)
	}
}