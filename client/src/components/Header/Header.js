import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/memberdat-logo.png'

export class Header extends Component {
	render() {
		return (
			<header>
				<nav className="z-depth-0">
					<div className="nav-wrapper">
						<a href="#!">
							<img className="logo-img" src={logo} alt="logo" />
						</a>
						<a href="#!" className="brand-logo">
							<b>MemberDat</b>
						</a>
						<ul className="right">
							<li><a className="" href="#!"><span className="log-text">Log off</span><i className="material-icons right">exit_to_app</i></a></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
};

export default Header;
