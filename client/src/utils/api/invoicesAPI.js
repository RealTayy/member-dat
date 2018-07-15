import axios from 'axios';

export default {
	submitInvoice: function (invoiceData) {
		// Get current Date for dateCreated
		let curDate = new Date()
		// Formats curDate into "YYYY-MM-DD"
		invoiceData.dateCreated = `${curDate.getFullYear()}-${(curDate.getMonth() + 1).toString().padStart(2, "0")}-${curDate.getDate()}`
		// Formats recieved data to match data
		const formattedData = {
			type: invoiceData.type,
			amountDue: invoiceData.amountDue,
			dateCreated: invoiceData.dateCreated,
			dueDate: invoiceData.dueDate,
			isPaid: false,
			note: invoiceData.note,
			parent: {
				_id: invoiceData.parID,
				dFull: invoiceData.parName
			}
		}
		console.log(formattedData);
		return axios.post('/api/invoices', formattedData);
	}
}