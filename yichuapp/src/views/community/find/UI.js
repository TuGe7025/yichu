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
				<div className = "content">
					<div className = "topic">

					</div>
					<div className = "place-top">
						<div className = "top-label">
							<div className = "label-l">顶置</div>
							<div className = "label-t">【有奖活动】那些买了就后悔的东西</div>
						</div>
					</div>
					<Talk />
				</div>
			</div>
		)		
	}
}
