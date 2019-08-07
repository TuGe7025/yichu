const proxy = require('http-proxy-middleware');
// 请求多条数据使用setupProxy.js请求数据反向代理
module.exports = (app) => {
	app.use(
		proxy('/api',{
			target: 'https://movie.douban.com',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	);
	app.use(
		proxy('/a',{
			target: 'https://movie.douban.com',
			changeOrigin: true,
			pathRewrite: {
				'^/a': ''
			}
		})
	);
}