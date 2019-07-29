import React, { Component } from 'react';
import Talk from '@/components/Community/Talk.jsx';
import './Community.scss';
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
					<div className = "community">
						<Talk { ...this.props }/>
					</div>
				</div>
			</div>
		)
	}
}