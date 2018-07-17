import React, { Component } from 'react';
import moment from 'moment';
import './InvoicesResultsRow.css';
import { Modal, Button } from 'react-materialize'


export class InvoicesResultsRow extends Component {
	render() {
		const invoice = this.props.invoice

		const getDueStatusDiv = (invoice) => {
			// console.log(invoice.dueDate);
			const dueMoment = moment(invoice.dueDate, 'YYYY-MM-DD');
			const todayMoment = moment();
			console.log(todayMoment.isBefore(dueMoment));
			if (invoice.isPaid) return <div className="due-status paid">PAID</div>
			if (todayMoment.isBefore(dueMoment)) return <div className="due-status pending">pending</div>
			return <div className="due-status overdue">OVERDUE</div>
		}

		const getPaymentDiv = (payment) => {
			if (payment) return <div className="payment-status paid">{payment}</div>
			return <div className="payment-status notpaid">NOT PAID</div>
		}

		const formatDate = (date) => {
			const dateSplit = date.split('-')
				, year = dateSplit[0]
				, month = dateSplit[1]
				, day = dateSplit[2]
			return `${month}-${day}-${year}`
		}

		return (
			<div className="row table-row">
				<div className="invoice-col left">
					<div className="status-col col s2">
						{getDueStatusDiv(invoice)}
						{getPaymentDiv(invoice.payment)}
					</div>
					<div className="info-col col s5">
						<div className="type-info"><i className="material-icons">info</i> {invoice.type}</div>
						<div className="id-info"><i className="material-icons">featured_play_list</i> {invoice.idtwo}</div>
					</div>
					<div className="pay-col col s5">
						<div className="due-pay"><i className="material-icons">date_range</i> {formatDate(invoice.dueDate)}</div>
						<div className="amount-pay"><i className="material-icons">monetization_on</i> {invoice.amountDue.toFixed(2)}</div>
					</div>
				</div>
				<div className="detail-col col right">
					<Modal
						header='Modal Header'
						bottomSheet
						trigger={<a className="waves-effect waves-light btn-large open-detail">Details <i className="material-icons right">description</i></a>}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</Modal>					
				</div>
			</div>
		)
	}
};

export default InvoicesResultsRow;
