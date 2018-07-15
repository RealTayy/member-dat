import axios from 'axios';

export default {
	submitEnrollment: function (enrollmentData) {
		console.log(enrollmentData);
		// Create and formats startDate and expireDate
		const curDate = new Date()
		const expDate = new Date()
		switch (enrollmentData.length) {
			case '3 Years':
				expDate.setFullYear(expDate.getFullYear() + 3);
				break;
			case '1 Year':
				expDate.setFullYear(expDate.getFullYear() + 1);
				break;
			case '6 Months':
				expDate.setMonth(expDate.getMonth() + 6);
				break;
			case '1 Month':
				expDate.setMonth(expDate.getMonth() + 1);
				break;
			case '6 Weeks':
				expDate.setDate(expDate.getDate() + 42);
				break;
			case '2 weeks':
				expDate.setDate(expDate.getDate() + 14);
				break;
			default:
				return new Error('Error calculating expiration date');
		}
		enrollmentData.startDate = `${curDate.getFullYear()}-${(curDate.getMonth() + 1).toString().padStart(2, "0")}-${curDate.getDate()}`
		enrollmentData.expireDate = `${expDate.getFullYear()}-${(expDate.getMonth() + 1).toString().padStart(2, "0")}-${expDate.getDate()}`
		// Formats enrollmentData into formattedData to be passes to back-end API
		const formattedData = {
			dojo: enrollmentData.dojo,
			beltrank: enrollmentData.beltRank,
			type: enrollmentData.type,
			initfee: enrollmentData.initFee,
			ratefee: enrollmentData.rateFee,
			expireDate: enrollmentData.expireDate,
			startDate: enrollmentData.startDate,
			willRenew: (enrollmentData.ratefee === "0.00") ? false : true,
		}
		return axios.post('api/enrollments', formattedData);
		
	}
}

// dojo: { type: String, required: true, trim: true },
// beltrank: { type: String, required: true, trim: true },
// type: { type: String, required: true, trim: true },
// initfee: { type: Number, required: true },
// monthlyFee: { type: Number, required: true },
// expireDate: { type: String, required: true, trim: true },
// length: { type: String, required: true, trim: true },
// startDate: { type: String, required: true, trim: true },
// willRenew: { type: Boolean, required: true, }