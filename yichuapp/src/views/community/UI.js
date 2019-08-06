import React, { Component } from 'react';
// import Mock from '@/Mock';

export default class extends Component {
	render () {
		return (
			<div className="box">
				<header className="community-header" style={{width:'100%',height:'0.44rem',backgroundColor:'#FFD525'}}>
					<ul style={{display:'flex',width:'100%',height:'0.44rem',justifyContent:'center',alignItems:'center'}}>
						<li>关注</li>
						<li>发现</li>
						<li>最新</li>
					</ul>	
				</header>	
				<div className="content">
				</div>
			</div>
		)		
	}
}
