import React, { Component } from 'react';
import { InvoicesResultsRow } from '.';

export class InvoicesResults extends Component {
	render() {
		const invoices = this.props.invoices;
		const parName = this.props.parName;
		return (
			<div className="invoices col s8">
				<div className="col s12 z-depth-2">
					<div className="divider"></div>
					<div className="invoices-results">
						{(invoices.length > 0)
							? this.props.invoices.map((invoice, i) => {
								return <InvoicesResultsRow key={i} invoice={invoice} />
							})
							: <div className="placeholder center-align valign-wrapper trans-card">
								<h2>Hey dawg make this look nice</h2>
							</div>
						}
					</div>
				</div>
			</div>
		)
	};
};

export default InvoicesResults;
