import React from 'react';
import Search from '../Search';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';

test('Link changes the class when hovered', () => {
	const component = renderer.create(
		<Provider store={store}>
			<Search />
		</Provider>
	);
	let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
});
