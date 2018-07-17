import React, { Component } from 'react';
import './InvoiceModal.css';
import { Button, Modal, Dropdown, NavItem } from 'react-materialize'
import { InvoiceOnlineModal } from '.';

export class InvoiceModal extends Component {
	handleClick = (e) => {
		e.preventDefault();
	}

	render() {
		const invoice = this.props.invoice;
		const parent = this.props.invoice.parent;
		console.log(invoice);
		console.log(parent);

		const formatDate = (date) => {
			const dateSplit = date.split('-')
				, year = dateSplit[0]
				, month = dateSplit[1]
				, day = dateSplit[2]
			return `${month}-${day}-${year}`
		}

		return (
			<div class="invoice-modal">
				<h4 class="modal-header"><i class="material-icons">receipt</i> Invoice - Details</h4>
				<div className="divider row"></div>
				<div className="modal-detail row">
					<div><i class="material-icons">info</i> Type: {invoice.type}</div>
					<div><i class="material-icons">featured_play_list</i> ID: {invoice.idtwo}</div>
					<div><i class="material-icons">event_note</i> Created: {formatDate(invoice.dateCreated)}</div>
					<div><i class="material-icons">event_note</i> Due: {formatDate(invoice.dueDate)}</div>
					<div><i class="material-icons">info</i> Status: {(invoice.isPaid) ? "PAID" : "NOT PAID"}</div>
					<div><i class="material-icons">event_available</i> Date Paid: {(invoice.paidDate) ? formatDate(invoice.paidDate) : ""}</div>
					<div><i class="material-icons">payment</i> Payment: {invoice.payment}</div>
				</div>
				<div className="row center-align">
					<Dropdown trigger={
						<Button className="waves-effect waves-light btn btn-large row">Set Payment<i class="material-icons right">monetization_on</i></Button>
					}>
						<NavItem onClick={this.handleClick}>Unpaid</NavItem>
						<NavItem divider />
						<NavItem onClick={this.handleClick}>Cash</NavItem>
						<NavItem onClick={this.handleClick}>Card</NavItem>
					</Dropdown>
					<Modal
						id='online-pay'
						bottomSheet
						trigger={<a class="waves-effect waves-light btn btn-large">Pay Online<i class="material-icons right">web</i></a>}>
						<InvoiceOnlineModal />
					</Modal>
					<h5>Notes</h5>
					<div className="modal-note">{invoice.note}</div>
				</div>
			</div>
		)
	}
};

export default InvoiceModal;
