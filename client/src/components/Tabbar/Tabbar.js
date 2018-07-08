import React, { Component } from 'react';
import './Tabbar.css';
// import { M } from 'materialize-css';

export class Tabbar extends Component {

	render() {
		return (
			<div className="tabbar row z-depth-2">
				<div className="col s12">
					<ul className="tabs">
						<li className="tab">
							<a className="waves-effect waves-blue" href="#1">
								<i className="material-icons">contacts</i>Nguyen, Andrew<i className="material-icons close-tab">cancel</i>
							</a>
						</li>
						<li className="tab">
							<a className="waves-effect waves-blue" href="#1">
								<i className="material-icons">directions_walk</i>Ta, Nhu Thao<i className="material-icons close-tab">cancel</i>
							</a>
						</li>
						<li className="tab">
							<a className="waves-effect waves-blue" href="#1">
								<i className="material-icons">directions_walk</i>Nguyen, Coco<i className="material-icons close-tab">cancel</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
};

export default Tabbar;
