import React, { Component } from 'react';
import Talk from '@/components/Community/Talk.jsx';
// 头部
import Header from '@/components/Header.jsx';
// 弹幕组件
// import DPlayer from "react-dplayer";

export default class extends Component {
	render () {
		return (
			<div className="box">
				<Header {...this.props}
        label="发现"
        labelLeft="关注"
        labelRight="最新"
        onLeftClick = {() => {
          // this.props.history.goBack()
        }}
         />
				<div className="content">
					<div className = "content-nav">
						<ul>
							<li>美食秀</li>
							<li>烘焙</li>
							<li>出去吃</li>
							<li>厨艺交流</li>
							<li>聊家常</li>
							<li>厨房问答</li>
						</ul>
					</div>
					<Talk />
				</div>
			</div>
		)		
	}
}
