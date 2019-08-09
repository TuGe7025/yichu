import React, { Component } from 'react';
import Attention from '@/components/Community/attention.jsx';
// 头部
import Header from '@/components/Header.jsx';
// 弹幕组件
// import DPlayer from "react-dplayer";
import '../Community.scss';
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
					<Attention />
				</div>
			</div>
		)		
	}
}
