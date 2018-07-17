import React, { Component } from 'react';
import $ from 'jquery';


export class TabbarTab extends Component {
	handleClickTab = (e) => {
		console.log('hi');
		if ($(e.target).hasClass('close-tab')) this.props.removeTab(this.props.data.id);
		else {
			this.props.setActiveTab(this.props.data.idtwo)
			console.log($('#ghost-link'));			
		};
	}

	render() {
		const getIconName = (idtwo) => {
			return (idtwo.charAt(0) === "S") ? 'directions_walk' : 'contacts'
		}

		const data = this.props.data;
		return (
			<li className="tab">
				<a className="waves-effect waves-blue" href="#1" onClick={this.handleClickTab}>
					<i className="material-icons">{getIconName(data.idtwo)}</i>{data.info.name.dFull}<i className="material-icons close-tab">cancel</i>
				</a>
			</li>
		)
	}
};

export default TabbarTab;
