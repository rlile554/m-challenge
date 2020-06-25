import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/Search/Search';
import { Provider } from 'react-redux';
import store from './store/store';
import ArticleList from './components/ArticleList/ArticleList';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Search />
      <ArticleList />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
