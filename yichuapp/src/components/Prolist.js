import React from 'react';
import './prol.scss';
import gongneng from '@/images/Icon/gongneng.png';//分类

export default (props) => {
	
	const { prolist } = props;
	
	return (
		<ul className="prolisting">
			{
				prolist.map((item) => (
					<li className="iteming" key = {item.id} > 
						<img className="proimg" src={item.images.small} alt={item.images.alt}></img>
						<div className="protit">
							<p>{ item.title }用户名用户名用户名用户名用户名用户名用户名用户名</p>
							<ul>
								<li>
									<img className="touxiang" src={gongneng} alt=""></img>
									<span>用户名用户名用户名用户名</span>
								</li>
								<li>
									<i className="iconfont icon-aixin"></i>
									<span>22</span>
								</li>
							</ul>
						</div>
					</li>
				))
			}
		</ul>
	)

}