import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setSearchAndFetch }  from '../../store/actions';

const Search = () => {
	const savedSearchString = useSelector((state) => state.searchString);
	const [searchString, setSearchString] = useState(savedSearchString);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('here');
		dispatch(setSearchAndFetch(searchString));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Search News:</h1>
			<input value={searchString} onChange={handleChange} />
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;