import React, { Component } from 'react';
import { InvoicesResultsRow } from '.';

export class InvoicesResults extends Component {
	render() {
		const invoices = this.props.invoices;
		return (
			<div className="invoices col s8">
				{(invoices.length > 0)
					? < div className="col s12 z-depth-2">
						<div className="divider"></div>
						<div className="invoices-results">
							{this.props.invoices.map((invoice, i) => {
								return <InvoicesResultsRow key={i} invoice={invoice} />
							})}
						</div>
					</div>
					: <div className="placeholder center-align valign-wrapper trans-card">
						<h2></h2>
					</div>
				}
			</div>
		)
	};
};

export default InvoicesResults;
