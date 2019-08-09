import React, { Component } from 'react';
// 引入声明式导航
import { NavLink } from 'react-router-dom';
//图标
import Bangbangtang from '@/images/Icon/bangbangtang.png';
import Loginbj from '@/images/Icon/loginbj1.jpg';
import './users.scss';

// 设置登录注册背景图片样式
const sectionStyle = {
	width:'100%',
	backgroundImage:`url(${Loginbj})`,
	backgroundSize:'100% 115%',

}
export default class extends Component {
	
	render () {
		return (
			<div className="box">
				{/* <header className="header">
					<h3>我的</h3>
				</header> */}
				<div className="contents">
					<div className="top">
						<ul className='topinner'>
							<li className='logins' style={sectionStyle}>
								<div>
									<img src={Bangbangtang} alt='' style={{width:'80px',height:'80px'}} />
									<NavLink to='/personage/login'>
										<span>请登录/注册</span>
									</NavLink>
								</div>
								<ul className='innertext'>
									<NavLink to='/personage/menu'>
										<p>0</p>
										<span>帖子</span>
									</NavLink>
									<NavLink  to='/personage/menu'>
										<p>0</p>
										<span>菜谱</span>
									</NavLink>
									<NavLink to='/personage/attention'>
										<p>0</p>
										<span>关注</span>
									</NavLink>
								</ul>
							</li>
							<li className='youhui'>
								<NavLink to='/personage/phaseolus'>
									<p>我的菜豆</p>
									<span>0</span>
								</NavLink>
								<NavLink to='/personage/integral'>
									<p>我的积分</p>
									<span>0</span>
								</NavLink>
								<NavLink to='/personage/coupon'>
									<p>优惠券</p>
									<span>0</span>
								</NavLink>
							</li>
						</ul>
					</div>
					<ul className="jilu">
						<NavLink to='/personage/goods'>
							<div>
								<i className="iconfont icon-ziyuan"></i>
								<span>我的订单</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
						<NavLink to='/personage/task'>
							<div>
								<i className="iconfont icon-renwu"></i>
								<span>任务中心</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
						<NavLink to='/personage/favorite'>
							<div>
								<i className="iconfont icon-xinbaniconshangchuan-"></i>
								<span>我的收藏</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
						<NavLink to='/personage/history'>
							<div>
								<i className="iconfont icon-lishi"></i>
								<span>浏览历史</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
					</ul>
					<ul className="jilu">
						<NavLink to='/personage/friends'>
							<div>
								<i className="iconfont icon-ziyuan"></i>
								<span>邀请好友</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
						<NavLink to='/personage/help'>
							<div>
								<i className="iconfont icon-renwu"></i>
								<span>反馈帮助</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
						<NavLink to='/personage/setting'>
							<div>
								<i className="iconfont icon-xinbaniconshangchuan-"></i>
								<span>设置</span>
							</div>
							<i className="iconfont icon-next"></i>
						</NavLink>
					</ul>
				</div>
			</div>
		)		
	}
}