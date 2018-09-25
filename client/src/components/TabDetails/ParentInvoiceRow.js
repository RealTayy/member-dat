import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import $ from 'jquery';

export class ParentInvoiceRow extends Component {
	handleClick = (e) => {
		const tabID = "invoice-tab"
		this.props.setActiveTab(tabID);
		$(`.sidenav-item>a`).removeClass('active');
	}	
	render() {

		const invoice = this.props.data

		const getDueStatusDiv = (invoice) => {
			// console.log(invoice.dueDate);
			const dueMoment = moment(invoice.dueDate, 'YYYY-MM-DD');
			const todayMoment = moment();
			if (invoice.isPaid) return <div className="due-status paid">PAID</div>
			if (todayMoment.isBefore(dueMoment)) return <div className="due-status pending">pending</div>
			return <div className="due-status overdue">OVERDUE</div>
		}

		const getPaymentDiv = (payment) => {
			if (!payment || (payment === "NOT PAID")) return <div className="payment-status notpaid">NOT PAID</div>
			return <div className="payment-status paid">{payment}</div>
		}

		return (
			<div className="row table-row">
				<div className="invoice-col left">
					<div className="status-col col s4">
						{getDueStatusDiv(invoice)}
						{getPaymentDiv(invoice.payment)}
					</div>
					<div className="info-col col s7">
						<div className="type-info"><i className="material-icons">info</i> {invoice.type}</div>
						<div className="amount-pay"><i className="material-icons">monetization_on</i> {invoice.amountDue.toFixed(2)}</div>
					</div>
				</div>
				<div className="detail-col col right">
					<Link to="/invoices" className="waves-effect waves-light btn-large btn-square open-detail" onClick={this.handleClick}><i className="material-icons">description</i></Link>
				</div>

			</div>
		)
	}
};

export default ParentInvoiceRow;
