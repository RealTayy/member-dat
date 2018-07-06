import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
	render() {
		return (
			<header>
				<nav className="z-depth-0">
					<div className="nav-wrapper">
						<a href="#!">
							<img className="logo-img" src="http://via.placeholder.com/56x56" alt="logo" />
						</a>
						<a href="#!" className="brand-logo">
							<div>MemberDat - JungDo TKD</div>
						</a>
						<ul className="right">
							<li><a href="#!">Log off<i className="material-icons right">exit_to_app</i></a></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
};

export default Header;
