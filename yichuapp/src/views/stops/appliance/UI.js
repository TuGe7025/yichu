import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import tubiao from '@/images/Icon/tubiao-.png';
import dianzan from '@/images/Icon/dianzan.png';


export default class extends Component {
	
	render () {
		const data = Array.from(new Array(22)).map((_val, i) => ({
			icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
			text: `name${i}`,
			}));
		return (
			<div className="box">
				<NavBar
     				 mode="light"
					icon={<Icon type="left" />}
					onLeftClick={(props) => this.props.history.goBack()}
					rightContent={<div style={{
						width: '22px',
						height: '22px',
						background: 'url(https://www.w3.org/2000/svg) center center /  21px 21px no-repeat' }}
					  />}
					>厨房电器  	
				</NavBar>
				<div className="content">
					<Grid data={data} 
					columnNum={3}
					isCarousel onClick={_el => console.log(_el)} />
					<div className="lists">
						<div className='sauce-shops'>
							<img src={tubiao} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
						<div className='sauce-shops'>
							<img src={dianzan} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
						<div className='sauce-shops'>
							<img src={tubiao} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
						<div className='sauce-shops'>
							<img src={dianzan} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
						<div className='sauce-shops'>
							<img src={dianzan} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
						<div className='sauce-shops'>
							<img src={dianzan} alt=""></img>
							<p>易厨牛肉香菇酱[包邮]...</p>
							<div>
								<span>￥29</span>
								<span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
							</div>
						</div> 
					</div>
				</div>
			</div>
		)		
	}
}