import { getArticlesByPage } from "../services/newsAPI";

const { SET_SEARCH, REQUEST_ARTICLES, RECIEVE_ARTICLES } = require("./actionTypes")

export const setSearch = (searchString) => {
	return {
		type: SET_SEARCH,
		searchString
	};
};

export const setSearchAndFetch = (searchString) => {
	return function (dispatch) {
		dispatch(setSearch(searchString));
		dispatch(fetchArticles(searchString, 1));
	}
}

export const requestArticles = () => {
	return {
		type: REQUEST_ARTICLES
	}
}

export const recieveArticles = (articles, page)  => {
	return {
		type: RECIEVE_ARTICLES,
		articles,
		page
	}
}

export function fetchArticles(searchString, page) {
  return function (dispatch) {
    dispatch(requestArticles());

		return getArticlesByPage(page, searchString)
			.then(response => {
				const articles = response.data.articles;
				console.log(articles);
				dispatch(recieveArticles(articles, page));
			});
  }
}
