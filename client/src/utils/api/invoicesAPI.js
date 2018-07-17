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
			parent: invoiceData.parID,
		}
		console.log(formattedData);
		return axios.post('/api/invoices', formattedData);
	},
	updateByID: function (id, invoiceData) {
		return axios.put(`/api/invoices/${id}`, invoiceData);
	}
}