import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import $ from 'jquery';

export class Sidenav extends Component {
	clickHandler = (e) => {
		const tabID = e.target.id;
		this.props.setActiveTab(tabID);
		$(`.sidenav-item>a`).removeClass('active');
		$(`#${tabID}`).addClass('active');
	}

	render() {
		return (
			<div className="sidenav-container">
				<ul id="slide-out" className="sidenav sidenav-fixed blue-grey darken-2 z-depth-2">
					<li className="sidenav-item"><Link to="/" id="dashboard-tab" className="waves-effect waves-blue" onClick={this.clickHandler}><i className="material-icons">dashboard</i>Dashboard</Link></li>
					<li className="sidenav-item"><Link to="/search" id="search-tab" className="waves-effect waves-blue" onClick={this.clickHandler}><i className="material-icons">search</i>Search</Link></li>
					<li className="sidenav-item"><Link to="/invoices" id="invoice-tab" className="waves-effect waves-blue" onClick={this.clickHandler}><i className="material-icons">receipt</i>Invoices</Link></li>
					<li className="sidenav-item"><Link to="/pointofsale" id="pointofsale-tab" className="waves-effect waves-blue" onClick={this.clickHandler}><i className="material-icons">attach_money</i>Point of Sale</Link></li>
					<li className="sidenav-item"><Link to="/addnew" id="addnew-tab" className="waves-effect waves-blue" onClick={this.clickHandler}><i className="material-icons">person_add</i>Add New</Link></li>
					<li className="sidenav-item"><Link to="/" id="test5" className="waves-effect waves-blue" onClick={this.clickHandler}>{this.props.activeTab}</Link></li>
				</ul>
				<a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</div>
		)
	}
};

export default Sidenav;
