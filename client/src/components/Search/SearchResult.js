import React, { Component } from 'react';
import { StudentResult, ParentResult } from '.';

export class SearchResult extends Component {
	render() {
		return (
			<div className="search-result row col s12 m8">
				{(this.props.activeSearchTab === 'parent-tab' && (this.props.parSearchResults.length > 0))
					? <div className="col s12 z-depth-2">
						<ParentResult
							results={this.props.parSearchResults}
							pushTab={this.props.pushTab}
						/>
					</div>
					: ""}

				{(this.props.activeSearchTab === 'student-tab' && (this.props.stuSearchResults.length > 0))
					? <div className="col s12 z-depth-2">
						<StudentResult
							results={this.props.stuSearchResults}
							pushTab={this.props.pushTab}
						/>
					</div>
					: ""}
			</div >
		)
	}
};

export default SearchResult;
