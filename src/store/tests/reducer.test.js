import { createStore } from 'redux';
import { rootReducer } from '../reducer';
import { setSearch, requestArticles, recieveArticles } from '../actions';

describe('reducer', () => {
	let store;

	beforeEach(() => {
		store = createStore(rootReducer);
	});

	afterEach(() => {
		store = null;
	});

	it('loads correct initial state', () => {
		expect(store.getState()).toEqual({
			searchString: '',
			currentPage: 1,
			articles: [],
			loading: false,
		});
	});

	it('Sets Search string and current page', ()=> {
		expect(store.getState().searchString).toEqual('');
		store.dispatch(setSearch('hello'));
		expect(store.getState().searchString).toEqual('hello');
		expect(store.getState().currentPage).toEqual(1);
	});

	it('Sets request articles loading state correctly',  () => {
		expect(store.getState().loading).toEqual(false);
		store.dispatch(requestArticles());
		expect(store.getState().loading).toEqual(true);
	});

	it('Sets recieve articles loading state correctly',  () => {
		expect(store.getState().loading).toEqual(false);
		store.dispatch(requestArticles());
		expect(store.getState().loading).toEqual(true);
		store.dispatch(recieveArticles([], 1));
		expect(store.getState().loading).toEqual(false);
	});

	it('Sets recieve articles articles correctly',  () => {
		store.dispatch(recieveArticles([{articleId: 1}], 1));
		expect(store.getState().loading).toEqual(false);
		expect(store.getState().articles).toEqual([{articleId: 1}]);
	});

	it('Sets recieve articles current page correctly',  () => {
		store.dispatch(recieveArticles([], 500));
		expect(store.getState().loading).toEqual(false);
		expect(store.getState().currentPage).toEqual(500);
	});
});
