import React, { Component } from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize'

export class ParentTableRow extends Component {
	
	render() {
		const data = this.props.data;

		// TODO: make this into react component
		const getActiveDiv = (isActive) => {
			if (isActive) return <div className="active-status active">Active</div>
			else return <div className="active-status inactive">Inactive</div>
		}

		// TODO: make this into react component
		const getPaidStatusDiv = (invoices) => {
			// Filters out unpaid invoices from invoices and returns relevant div
			const unpaidInvoices = invoices.filter((invoice) => !invoice.isPaid);
			if (unpaidInvoices.length > 0) return <div className="paid-status unpaid">{unpaidInvoices.length} UNPAID</div>
			else return <div className="paid-status paid">paid</div>
		}
		console.log(data);

		return (
			<div className="row table-row">
				<div className="data-col left">
					<div className="status-col col s2">
						{getActiveDiv(data.isActive)}
						{getPaidStatusDiv(data.invoices)}
					</div>
					<div className="info-col col s4">
						<div className="name-info"><i className="material-icons">person</i> {data.info.name.dFull}</div>
						<div className="id-info"><i className="material-icons">featured_play_list</i> {data.idtwo}</div>
					</div>
					<div className="contact-col col s6">
						<div className="email-contact"><i className="material-icons">email</i> {data.info.contact.email}</div>
						<div className="phone-contact"><i className="material-icons">local_phone</i> {data.info.contact.phone}</div>
					</div>
				</div>

				<div className="button-col col left">
					<div className="right-align">
						<Dropdown trigger={
							<Button className="btn-large btn-square open-students"><i className="material-icons">directions_walk</i></Button>
						}>
							<NavItem>one</NavItem>
							<NavItem>two</NavItem>
						</Dropdown>
						<a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
					</div>
				</div>
			</div>
		)
	}
};

export default ParentTableRow;
