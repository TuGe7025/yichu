import React, { Component } from 'react';
// 走马灯UI组件
import Prolist from '@/components/Prolist';
import { Carousel } from 'antd-mobile';


export default class extends Component {
	componentDidMount () {
		this.props.getBannerlist();
		this.props.getProlist();
	}
	render () {
		let { bannerlist, prolist } = this.props
		console.log(bannerlist)
		return (
			<div className="box">
				<div className="content">
					<Carousel
						autoplay={ true }
						infinite>
						{ bannerlist.map((item, index) => (
							<a
								key={index}
								href="http://www.alipay.com"
								style={{ display: 'inline-block', width: '100%', height: '200px' }}>
								<img src={`https://www.daxunxun.com${item}`}
								  alt=""
								  style={{ width: '100%', verticalAlign: 'top' }} />
							 </a>
						))}
					</Carousel>
					<Prolist prolist = { prolist } />
				</div>
			</div>
		)		
	}
}