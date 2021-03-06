import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import $ from 'jquery';

export class Sidenav extends Component {
	state = {
		isCollapsed: false
	}

	handleClick = (e) => {
		const tabID = e.target.id;		
		this.props.setActiveTab(tabID);
		$(`.sidenav-item>a`).removeClass('active');
	}

	handleCollapse = () => {
		if (this.state.isCollapsed) {
			$('.content-container,.tabbar').css({ 'margin-left': '250px' });
			$('.content-container').css({ 'width': 'calc(100% - 250px)' });
			$('.sidenav').css({ 'width': '250px' });
			$('.sidenav>li>a').css({ 'padding': '0 36px' })
			$('.material-tooltip').css({ 'padding': '0', 'width': '0' })
			$('.tabbar .indicator').animate({ 'right': '-=202' });
			$('.parent-tab.active').parent().parent().children('.indicator')
				.animate({ 'right': '-=33' });
			$('.student-tab.active').parent().parent().children('.indicator')
				.animate({ 'left': '-=33' });

			this.setState({ isCollapsed: false })
		} else {
			$('.content-container,.tabbar').css({ 'margin-left': '48px' });
			$('.content-container').css({ 'width': 'calc(100% - 48px)' });
			$('.sidenav').css({ 'width': '48px' });
			$('.sidenav>li>a').css({ 'padding': '0 12px' })
			$('.material-tooltip').css({ 'padding': '10px 8px', 'width': '' })
			$('.tabbar .tabs>.indicator').animate({ 'right': '+=202' });
			$('.parent-tab.active').parent().parent().children('.indicator')
				.animate({ 'right': '+=33' });
			$('.student-tab.active').parent().parent().children('.indicator')
				.animate({ 'left': '+=33' });

			this.setState({ isCollapsed: true })
		}
	}

	componentDidMount() {
		
	}

	componentDidUpdate() {
		$(`#${this.props.activeTab}`).addClass('active');
	}

	render() {
		return (
			<div className="sidenav-container">
				<ul className="sidenav sidenav-fixed blue-grey darken-2 z-depth-2">
					<li className="sidenav-item">
						<a id="collapse-sidenav" className="waves-effect waves-blue" onClick={this.handleCollapse}>
							<i className="material-icons">menu</i>Collapse
						</a>
					</li>
					<li className="sidenav-item">
						<Link to="/" id="dashboard-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Dashboard">
							<i className="material-icons">dashboard</i>Dashboard
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/search" id="search-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Search">
							<i className="material-icons">search</i>Search
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/invoices" id="invoice-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Invoices">
							<i className="material-icons">receipt</i>Invoices
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/pointofsale" id="pointofsale-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Point of Sale">
							<i className="material-icons">monetization_on</i>Point of Sale
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/addparent" id="addparent-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Add Parent">
							<i className="material-icons">contacts</i>Add Parent
						</Link>
					</li>
					<li className="sidenav-item">
						<Link to="/addstudent" id="addstudent-tab" className="waves-effect waves-blue tooltipped" onClick={this.handleClick}
							data-position="right" data-tooltip="Add Student">
							<i className="material-icons">directions_walk</i>Add Student
						</Link>
					</li>
				</ul>
			</div>
		)
	}
};

export default Sidenav;
