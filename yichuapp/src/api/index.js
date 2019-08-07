import axios from 'axios';
// 运行是npm run start 为真否则为假
const isDev = process.env.NODE_ENV === 'developement';

//自定义配置axios

const ajax = axios.create({
	baseURL: isDev ? 'https://www.daxunxun.com' : 'https://www.daxunxun.com',
	timeout: 6 * 1000
})

ajax.interceptors.request.use(function (config) {
	// 添加请求拦截器
	// 在发送请求之前做些什么
  // 设置请求头、设置loading动画
	console.log('开始加载数据了')
	return config;
},function (error) {
	// 对请求错误做些什么 提示报错信息
	console.log('没有请求到数据')
	return Promise.reject(error);
});

ajax.interceptors.response.use(function (response) {
	// 对响应数据做点什么 响应成功返回成功信息
	console.log('接收到数据了')
	return response;
},function (error) {
	console.log('数据接收错误')
	return Promise.reject(error);
});

export default ajax;