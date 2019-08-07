import React from 'react';

// replace表示替换
export default (props) => (
	<div className="box">
		啊哦~你访问不该看的了吧
		<button onClick = {() => {
			props.history.replace('/home')
		} }>返回首页</button>
	</div>
)