import React, { Component } from 'react';
import { ParentSearch, StudentSearch } from '.';
import $ from 'jquery';

export class SearchForm extends Component {
	handleTabClick = (e) => {
		this.props.setActiveSearchTab(e.target.id);
	}

	componentDidMount() {
		$('.search-selector .tabs').tabs();
	}

	render() {
		return (
			<div className="search-form col s12 m4 row">
				<div className="col s12 z-depth-2">
					<h4 className="search-header center-align">Search By</h4>
					<div className="search-selector">
						<div className="input-field row">
							<div className="search-selector-container col s12">
								<ul className="tabs z-depth-2">
									<li className="tab col s12 m6">
										<a id="parent-tab" className="parent-tab waves-effect waves-blue" href="#parent-search" onClick={this.handleTabClick}>
											<i className="material-icons">contacts</i>Parent
										</a>
									</li>
									<li className="tab col s12 m6">
										<a id="student-tab" className="student-tab waves-effect waves-blue" href="#student-search" onClick={this.handleTabClick}>
											<i className="material-icons">directions_walk</i>Student
										</a>
									</li>
								</ul>
							</div>
						</div>
						<ParentSearch
							setParSearchResults={this.props.setParSearchResults}
						/>
						<StudentSearch
							setStuSearchResults={this.props.setStuSearchResults}
						/>
					</div>
				</div>
			</div>
		)
	}
};

export default SearchForm;
