import React, { Component } from 'react';
import './Search.css';
import $ from 'jquery';
import { SearchForm, SearchResult } from '../../components/Search';

export class Search extends Component {
	componentDidMount() {
		$('.search-selector .tabs').tabs();		
	}

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
