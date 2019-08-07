// 使用redux-thunk 的异步模块--数据请求

import ajax from '@/api';

export default {
	getBannerlist (dispatch) {
		ajax.get('/banner').then(res => {
			dispatch({
				type: 'CHANGE_BANNER_LIST' ,	
				data: res.data
			})
		})
	},
	getProlist (dispatch) {
		ajax.get('/douban').then(res => {
			dispatch({
				type: 'CHANGE_PRO_LIST' ,	
				data: res.data
			})
		})
	}
}