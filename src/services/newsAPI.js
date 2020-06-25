import axios from 'axios';

const apiKey = '5afe94b5db294e4d804a16a1a712de66';

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
