import React, { Component } from 'react';
import './InvoiceModal.css';
import { Button, Modal, Dropdown, NavItem } from 'react-materialize'
import { InvoiceOnlineModal } from '.';
import { invoicesAPI } from '../../utils/api/index';
import $ from 'jquery';
import moment from 'moment';

export class InvoiceModal extends Component {
	handleClickPayment = (e) => {
		e.preventDefault();
		const payment = $(e.target).text();
		const id = this.props.invoice._id;
		let updateObject = {};
		console.log(moment().format('YYYY-MM-DD'));
		if (payment === "NOT PAID") { updateObject = { payment: payment, isPaid: false, paidDate: '' } }
		else { updateObject = { payment: payment, isPaid: true, paidDate: moment().format('YYYY-MM-DD') } }
		invoicesAPI
			.updateByID(id, updateObject)
			.then((data) => {
				console.log(data)
				return window.Materialize.toast(`Payment updated sucessfully!`, 5000, 'animated bounceInUp green darken-2');
			})
			.catch((err) => {
				console.log(err)
				return window.Materialize.toast(`Error updating payment`, 5000, 'animated bounceInUp red darken-2');
			})
	}

	render() {
		const invoice = this.props.invoice;		
		
		const formatDate = (date) => {
			const dateSplit = date.split('-')
				, year = dateSplit[0]
				, month = dateSplit[1]
				, day = dateSplit[2]
			return `${month}-${day}-${year}`
		}

		return (
			<div className="invoice-modal">
				<h4 className="modal-header"><i className="material-icons">receipt</i> Invoice - Details</h4>
				<div className="divider row"></div>
				<div className="modal-detail row">
					<div className="col s6">
						<div><i className="material-icons">info</i> Type: {invoice.type}</div>
						<div><i className="material-icons">featured_play_list</i> ID: {invoice.idtwo}</div>
						<div><i className="material-icons">event_note</i> Created: {formatDate(invoice.dateCreated)}</div>
						<div><i className="material-icons">event_note</i> Due: {formatDate(invoice.dueDate)}</div>
					</div>
					<div className="col s6">
						<div><i className="material-icons">info</i> Status: {(invoice.isPaid) ? "PAID" : "NOT PAID"}</div>
						<div><i className="material-icons">event_available</i> Date Paid: {(invoice.paidDate) ? formatDate(invoice.paidDate) : ""}</div>
						<div><i className="material-icons">payment</i> Payment: {invoice.payment}</div>
					</div>

				</div>
				<div className="row center-align">
					<Dropdown trigger={
						<Button className="waves-effect waves-light btn btn-large row">Set Payment<i className="material-icons right">monetization_on</i></Button>
					}>
						<NavItem data-payment="Unpaid" onClick={this.handleClickPayment}>NOT PAID</NavItem>
						<NavItem divider />
						<NavItem data-payment="Cash" onClick={this.handleClickPayment}>Cash</NavItem>
						<NavItem data-payment="Card" onClick={this.handleClickPayment}>Card</NavItem>
					</Dropdown>
					<Modal
						id='online-pay'
						bottomSheet
						trigger={<a className="waves-effect waves-light btn btn-large">Pay Online<i className="material-icons right">web</i></a>}>
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
