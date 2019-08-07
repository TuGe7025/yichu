// UI组件

/**
 * 这个函数用来合并对象而使用
	@param {Object} state
	@param {Object} obj
 
 
 */

const combineObj = (state, obj) => {
  return Object.assign({}, state, obj)
}

export default (state = {
	bannerlist: [1, 2],
	prolist: []
},{ type, data }) => {
	switch (type) {
		case 'CHANGE_BANNER_LIST':
			return combineObj(state, { bannerlist: data });
		case 'CHANGE_PRO_LIST':
			return combineObj(state, { prolist: data });
		default:
			return state;
	}
}