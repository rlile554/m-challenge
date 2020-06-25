import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';

test('Link changes the class when hovered', () => {
	const component = renderer.create(
		<Provider store={store}>
			<ArticleList />
		</Provider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
