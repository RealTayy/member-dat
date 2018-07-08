import React, { Component } from 'react';
import { ParentSearch, StudentSearch } from '.';
import $ from 'jquery';

export class SearchForm extends Component {
	componentDidMount() {
		$('.search-selector .tabs').tabs();
	}
	render() {
		return (
			<div className="search-form col s4">
				<h4 className="search-header center-align">Search By</h4>
				<div className="search-selector">
					<div className="input-field row">
						<div className="search-selector-container col s12">
							<ul className="tabs z-depth-1">
								<li className="tab col s12 m6"><a className="waves-effect waves-blue" href="#parent-search"><i className="material-icons">contacts</i>Parent</a></li>
								<li className="tab col s12 m6"><a className="waves-effect waves-blue" href="#student-search"><i className="material-icons">directions_walk</i>Student</a></li>
							</ul>
						</div>
					</div>
					<ParentSearch />
					<StudentSearch />
				</div>
			</div>
		)
	}
};

export default SearchForm;
