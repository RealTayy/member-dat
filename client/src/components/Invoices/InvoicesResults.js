import React, { Component } from 'react';
import { InvoicesResultsRow } from '.';

export class InvoicesResults extends Component {
	state = {
		parID: '',
		parName: 'Please Link Parent ID',
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.parName) this.setState(nextProps);
	}

	render() {
		const parName = this.state.parName;
		return (
			<div className="invoices col s8">
				<div className="col s12 z-depth-2 trans-card">
					<h4 className="invoices-header">
						Invoices
						<span> - {parName}</span>
					</h4>
					<div className="divider"></div>
					<div className="invoices-results">

						<InvoicesResultsRow />
						<div className="row table-row">
							<div className="invoice-col left">
								<div className="status-col col s2">
									<div className="due-status overdue">OVERDUE</div>
									<div className="payment-status notpaid">NOT PAID</div>
								</div>
								<div className="info-col col s5">
									<div classNAme="type-info"><i className="material-icons">info</i> Member Dues</div>
									<div className="id-info"><i className="material-icons">featured_play_list</i> I00000</div>
								</div>
								<div className="pay-col col s5">
									<div className="due-pay"><i className="material-icons">date_range</i> 01-15-2018</div>
									<div className="amount-pay"><i className="material-icons">monetization_on</i> 650.00</div>
								</div>
							</div>
							<div className="detail-col col right">
								<a className="waves-effect waves-light btn-large open-detail">Details <i className="material-icons right">description</i></a>
							</div>
						</div>

						<div className="row table-row">
							<div className="invoice-col left">
								<div className="status-col col s2">
									<div className="due-status pending">PENDING</div>
									<div className="payment-status notpaid">NOT PAID</div>
								</div>
								<div className="info-col col s5">
									<div classNAme="type-info"><i className="material-icons">info</i> Member Dues</div>
									<div className="id-info"><i className="material-icons">featured_play_list</i> I00000</div>
								</div>
								<div className="pay-col col s5">
									<div className="due-pay"><i className="material-icons">date_range</i> 01-15-2018</div>
									<div className="amount-pay"><i className="material-icons">monetization_on</i> 650.00</div>
								</div>
							</div>
							<div className="detail-col col right">
								<a className="waves-effect waves-light btn-large open-detail">Details <i className="material-icons right">description</i></a>
							</div>
						</div>

						<div className="row table-row">
							<div className="invoice-col left">
								<div className="status-col col s2">
									<div className="due-status paid">PAID</div>
									<div className="payment-status paid">ONLINE</div>
								</div>
								<div className="info-col col s5">
									<div classNAme="type-info"><i className="material-icons">info</i> Member Dues</div>
									<div className="id-info"><i className="material-icons">featured_play_list</i> I00000</div>
								</div>
								<div className="pay-col col s5">
									<div className="due-pay"><i className="material-icons">date_range</i> 01-15-2018</div>
									<div className="amount-pay"><i className="material-icons">monetization_on</i> 650.00</div>
								</div>
							</div>
							<div className="detail-col col right">
								<a className="waves-effect waves-light btn-large open-detail">Details <i className="material-icons right">description</i></a>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	};
};

export default InvoicesResults;
