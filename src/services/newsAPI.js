import axios from 'axios';

const apiKey = 'PUT YOUR API KEY HERE';

export function getArticlesByPage(page=1, q = '') {
	return axios.get('https://newsapi.org/v2/everything', {
		params: {
			apiKey,
			q,
			pageSize: 10,
			page,
		},
	});
}
