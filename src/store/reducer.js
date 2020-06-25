const {
	SET_SEARCH,
	REQUEST_ARTICLES,
	RECIEVE_ARTICLES,
} = require('./actionTypes');

const initialState = {
	searchString: '',
	currentPage: 1,
	articles: [],
	loading: false,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH: {
			return {
				...state,
				searchString: action.searchString,
				nextPage: 0,
			};
		}
		case REQUEST_ARTICLES: {
			return {
				...state,
				loading: true,
			};
		}
		case RECIEVE_ARTICLES: {
			return {
				...state,
				loading: false,
				articles: action.articles,
				currentPage: action.page
			};
		}
		default:
			return state;
	}
};
