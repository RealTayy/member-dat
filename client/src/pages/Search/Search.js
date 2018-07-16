import React, { Component } from 'react';
import './Search.css';
import { SearchForm, SearchResult } from '../../components/Search';

export class Search extends Component {
	state = {
		parSearchResults: [],
		stuSearchResults: [],
		activeSearchTab: 'parent-tab'
	}

	setParSearchResults = (searchResults) => {
		this.setState({ parSearchResults: searchResults });
	}

	setStuSearchResults = (searchResults) => {
		this.setState({ stuSearchResults: searchResults });
	}

	setActiveSearchTab = (activeTab) => {
		this.setState({ activeSearchTab: activeTab });
	}

	render() {
		const activeSearchTab = this.state.activeSearchTab;
		const parSearchResults = this.state.parSearchResults;
		const stuSearchResults = this.state.stuSearchResults;
		return (
			<div className="row">
				<SearchForm
					setActiveSearchTab={this.setActiveSearchTab}
					setParSearchResults={this.setParSearchResults}
					setStuSearchResults={this.setStuSearchResults}					
				/>
				<SearchResult
					activeSearchTab={activeSearchTab}
					parSearchResults={parSearchResults}
					stuSearchResults={stuSearchResults}
					pushTab={this.props.pushTab}
				/>
			</div>
		)
	}
};

export default Search;
