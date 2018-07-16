import React, { Component } from 'react';
import { StudentResult, ParentResult } from '.';

export class SearchResult extends Component {
	render() {
		return (
			<div className="search-result col s8">
				<div className="col s12 z-depth-2">
					{(this.props.activeSearchTab === 'parent-tab')
						? <ParentResult
							results={this.props.parSearchResults}
							pushTab={this.props.pushTab}
						/>
						: <StudentResult
							results={this.props.stuSearchResults}
							pushTab={this.props.pushTab}
						/>
					}
				</div>
			</div >
		)
	}
};

export default SearchResult;
