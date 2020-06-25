import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './articleList.css';
import { fetchArticles } from '../../store/actions';

const ArticleList = () => {
	const dispatch = useDispatch();
	const searchString = useSelector((state) => state.searchString);
	const articles = useSelector((state) => state.articles);
	const currentPage = useSelector((state) => state.currentPage);
	const loading = useSelector((state) => state.loading);

	const onNext = ()  => {
		dispatch(fetchArticles(searchString, currentPage + 1));
	}

	const onPrev = () => {
		dispatch(fetchArticles(searchString, currentPage - 1));
	}

	const getArticles = (articles) => {
		return articles.map((a, idx) => (
			<div key={idx} className='article'>
				<a target='_blank' rel='noopener noreferrer' href={a.url}>
					{a.title}
				</a>
			</div>
		));
	};

	return (
		<>
			{loading && <h1>Loading...</h1>}
			<div className='articleList'>{getArticles(articles)}</div>
			{articles.length !== 0 && (
				<div className="buttons">
					<button onClick={onPrev}>Previous</button>
					<div>{currentPage}</div>
					<button onClick={onNext}>Next</button>
				</div>
			)}
		</>
	);
};

export default ArticleList;
