import React, { Component } from 'react';
import Talk from '@/components/Community/Talk.jsx';
// 头部
import Header from '@/components/Header';
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
					<Talk />
				</div>
			</div>
		)		
	}
}
