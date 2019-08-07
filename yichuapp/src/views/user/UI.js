import React, { Component } from 'react';
//图标
import Bangbangtang from '@/images/Icon/bangbangtang.png';
import Loginbj from '@/images/Icon/loginbj1.jpg';
import './users.scss';

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
									<span>请登录/注册</span>
									<i className="iconfont icon-next"></i>
								</div>
								<ul className='innertext'>
									<li>
										<p>0</p>
										<span>帖子</span>
									</li>
									<li>
										<p>0</p>
										<span>菜谱</span>
									</li>
									<li>
										<p>0</p>
										<span>关注</span>
									</li>
								</ul>
							</li>
							<li className='youhui'>
								<div>
									<p>我的菜豆</p>
									<span>0</span>
								</div>
								<div>
									<p>我的积分</p>
									<span>0</span>
								</div>
								<div>
									<p>优惠券</p>
									<span>0</span>
								</div>
							</li>
						</ul>
					</div>
					<ul className="jilu">
						<li>
							<div>
								<i className="iconfont icon-ziyuan"></i>
								<span>我的订单</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
						<li>
							<div>
								<i className="iconfont icon-renwu"></i>
								<span>任务中心</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
						<li>
							<div>
								<i className="iconfont icon-xinbaniconshangchuan-"></i>
								<span>我的收藏</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
						<li>
							<div>
								<i className="iconfont icon-lishi"></i>
								<span>浏览历史</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
					</ul>
					<ul className="jilu">
						<li>
							<div>
								<i className="iconfont icon-ziyuan"></i>
								<span>邀请好友</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
						<li>
							<div>
								<i className="iconfont icon-renwu"></i>
								<span>反馈帮助</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
						<li>
							<div>
								<i className="iconfont icon-xinbaniconshangchuan-"></i>
								<span>设置</span>
							</div>
							<i className="iconfont icon-next"></i>
						</li>
					</ul>
				</div>
			</div>
		)		
	}
}