import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
	constructor (props) {
		super(props);
		this.state={
			title:''
		}
	}
	componentDidMount () {
		const { props: { match : { params: { id } } } } = this
		console.log(id)
		axios.get('https://www.daxunxun.com/douban').then(res=> {
			let data = {}
			res.data.map(item => {
				if (item.id === id) {
					data = item
				}
				return ''
			})
			this.setState({
				title: data.title
			})
		})
	
	}
	render () {
		return (
			<div className="box">
				<header className="header">
					详情
				</header>
				<div className="content">
					{this.state.title}
				</div>
			</div>
		)		
	}
}