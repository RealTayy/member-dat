import React, { Component } from 'react';
import './Search.css';
import $ from 'jquery';

export class Search extends Component {
	componentDidMount() {
		// $('search-selector .tabs').tabs();
	}

	render() {
		return (
			<div className="">
				<div className="row">
					<div className="search-form col s4">
						<h5 className="search-header center-align">Search By</h5>
						<div className="search-selector">
							<div className="input-field row">
								<div className="search-selector-container col s12">
									<ul class="tabs z-depth-1">
										<li class="tab col s12 m6"><a className="waves-effect waves-blue" href="#"><i class="material-icons">contacts</i>Parent</a></li>
										<li class="tab col s12 m6"><a className="waves-effect waves-blue" href="#"><i class="material-icons">directions_walk</i>Student</a></li>
									</ul>
								</div>
							</div>
							Form goes here!
						</div>
					</div>
					<div className="search-result col s8">
						Search Results goes here!
					</div>
				</div>
			</div>
		)
	}
};

export default Search;
