import React, { Component } from 'react';
import './Search.css';
import { SearchForm, SearchResult } from '../../components/Search';

export class Search extends Component {
	render() {
		return (
			<div className="row">
				<SearchForm />
				<SearchResult />
			</div>
		)
	}
};

export default Search;
