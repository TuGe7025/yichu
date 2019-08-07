import React, { Component } from 'react';
// 走马灯UI组件
import Prolist from '@/components/Prolist';
import { Carousel } from 'antd-mobile';
// 引入头部组件
import Header from '@/components/Header';

export default class extends Component {
	state = {
		value: '美食',
	  };
	componentDidMount () {
		this.props.getBannerlist();
		this.props.getProlist();
	}
	handleClick = () => {
		this.manualFocusInst.focus();
	  }
	render () {
		let { bannerlist, prolist } = this.props
		console.log(bannerlist)
		return (
			<div className="box">
				<header className="header">
					<Header left={<p className='iconfont icon-gaiicon-'></p>}></Header>
				</header>
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