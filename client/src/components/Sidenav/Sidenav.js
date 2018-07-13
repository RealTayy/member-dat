import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import $ from 'jquery';

export class Sidenav extends Component {
	clickHandler = (e) => {
		const tabID = e.target.id;
		this.props.setActiveTab(tabID);
		$(`.sidenav-item>a`).removeClass('active');
	}

	componentDidUpdate() {
		$(`#${this.props.activeTab}`).addClass('active');
	}

	render() {
		return (
			<div className="sidenav-container">
				<ul className="sidenav sidenav-fixed blue-grey darken-2 z-depth-2">
					<li className="sidenav-item">
						<Link to="/" id="dashboard-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">dashboard</i>Dashboard
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/search" id="search-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">search</i>Search
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/invoices" id="invoice-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">receipt</i>Invoices
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/pointofsale" id="pointofsale-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">attach_money</i>Point of Sale
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/addparent" id="addparent-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">person_add</i>Add Parent
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/addstudent" id="addstudent-tab" className="waves-effect waves-blue" onClick={this.clickHandler}>
							<i className="material-icons">person_add</i>Add Student
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/dontclickme" id="why-you-click-me-bro" className="waves-effect waves-blue" onClick={this.clickHandler}>
							{this.props.activeTab}
						</Link>
					</li>
				</ul>
			</div>
		)
	}
};

export default Sidenav;
