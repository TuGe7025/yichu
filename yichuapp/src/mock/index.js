const Mock = require('mockjs');

/**
 * 
 *列表数据()模拟数据
 * 
 *
 * 
 */

function moive() {
	let prolist = [];
	for(var i = 0; i<20;i++){
		prolist.push({
			id: i + 1,
			cover: Mock.Random.image('170x100', Mock.mock('@color()'), '#FFF', 'png', i + 1),
			title: Mock.mock('@csentence(5, 10)'),
			rate: (Math.random() * 3 + 7).toFixed(1)
			
		})
	}
	return {
		subjects: prolist
	}
}

Mock.mock('https://movie.douban.com/j/search_subjects?type=movie&tag=%E9%AB%98%E5%88%86&sort=time&page_limit=20&page_start=0','get',moive);