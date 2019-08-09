import React, { Component } from 'react';
import Header from '@/components/Header.jsx';

export default class extends Component {
	
	render () {
		return (
			<div className="box">
				<Header {...this.props}
					chef="名厨"
				/>
				<div className="content">
				</div>
			</div>
		)		
	}
}