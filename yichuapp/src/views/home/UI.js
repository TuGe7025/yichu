import React, { Component } from 'react';
// 走马灯UI组件
import Prolist from '@/components/Prolist';
import { Carousel } from 'antd-mobile';
// 引入头部组件
import Header from '@/components/Header';
import './hom.scss';

// 图标
import gongneng from '@/images/Icon/gongneng.png';//分类
import jianshen from '@/images/Icon/jianshen.png'; //健身七分吃
import zan from '@/images/Icon/zan.png'; //本周佳作
import hongpeishoutao from '@/images/Icon/hongpeishoutao.png'; //烘焙
import dianfanbao from '@/images/Icon/dianfanbao.png'; //煲汤
import shala from '@/images/Icon/shala.png'; //素食主义
import qiandao from '@/images/Icon/qiandao.png'; //签到领现金
import yangsheng from '@/images/Icon/yangsheng.png'; //经期管家

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
					<div className="zhongxin">
						<ul id="home-list">
							<li>
								<span>分类</span>
								<i><img src={gongneng} alt=""></img></i>
							</li>
							<li>
								<span>本周佳作</span>
								<i><img src={zan} alt=""></img></i>
							</li>
							<li>
								<span>签到领现金</span>
								<i><img src={qiandao} alt=""></img></i>
							</li>
							<li>
								<span>健身七分吃</span>
								<i><img src={jianshen} alt=""></img></i>
							</li>
							<li>
								<span>烘焙</span>
								<i><img src={hongpeishoutao} alt=""></img></i>
							</li>
							<li>
								<span>煲汤</span>
								<i><img src={dianfanbao} alt=""></img></i>
							</li>
							<li>
								<span>素食主义</span>
								<i><img src={shala} alt=""></img></i>
							</li>
							<li>
								<span>经期管家</span>
								<i><img src={yangsheng} alt=""></img></i>
							</li>
						</ul>
						<h1>精彩短视频</h1>
						<div className="vidos">
							<div className="vidos-big">视频一</div>
							<div className="vidos-small">
								<div>视频二</div>
								<div>视频三</div>
							</div>
						</div>
					</div>
					<Prolist prolist = { prolist } />

				</div>
			</div>
		)		
	}
}