import React, { Component } from 'react';
import moment from 'moment';

export class ParentInvoiceRow extends Component {
	render() {
		const invoice = this.props.data

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
					<a className="waves-effect waves-light btn-large open-detail">Details <i className="material-icons right">description</i></a>
				</div>
			</div>
		)
	}
};


export default ParentInvoiceRow
	;
