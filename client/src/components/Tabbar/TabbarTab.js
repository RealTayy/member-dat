import React, { Component } from 'react';
import $ from 'jquery';


export class TabbarTab extends Component {
	handleClickTab = (e) => {		
		if ($(e.target).hasClass('close-tab')) this.props.removeTab(this.props.data.id);
		else {
			this.props.setActiveTab(this.props.data.idtwo)			
		};
	}

	render() {
		const getIconName = (idtwo) => {
			return (idtwo.charAt(0) === "S") ? 'directions_walk' : 'contacts'
		}

		const data = this.props.data;
		return (
			<li className="tab animated fadeInRight">
				<a className="waves-effect waves-blue" href={`#${data.idtwo}`} onClick={this.handleClickTab}>
					<i className="material-icons">{getIconName(data.idtwo)}</i>{data.info.name.dFull}<i className="material-icons close-tab">cancel</i>
				</a>
			</li>
		)
	}
};

export default TabbarTab;
