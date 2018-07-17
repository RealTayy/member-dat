import React, { Component } from 'react';
import './Tabbar.css';
import { TabbarTab } from './TabbarTab';

export class Tabbar extends Component {	
	render() {
		const tabs = this.props.tabs
		return (
			<div className="tabbar row z-depth-2">
				<div className="col s12">
					<ul className="tabs">
						{tabs.map((tab, i) => {
							return <TabbarTab
								key={i}
								data={tab}
								setActiveTab={this.props.setActiveTab}
								removeTab={this.props.removeTab}
							/>
						})}
					</ul>
				</div>
			</div>
		)
	}
};

export default Tabbar;
