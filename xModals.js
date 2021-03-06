const parent_object = {
	info: {
		name: {
			full,
			first,
			last,
		},
		contact: {
			phone,
			email,
		},
		dob: {
			full,
			year,
			month,
			date,
		},
		startDate: {
			full,
			year,
			month,
			day,
		},
		address: {
			full,
			line1,
			line2,
			city,
			state,
			zip,
		},
		emergencyContact: {
			name: {
				full,
				first,
				last,
			},
			contact: {
				phone,
				email,
			},
			relation,
		},
		heardBy,
		referBy,
	},
	student: {
		// student ids go here
	},
	invoice: {
		// invoice ids go here
	}
}

const student_object = {
	info: {
		name: {
			full,
			first,
			last,
		},
		dob: {
			full,
			year,
			month,
			date,
		},
		startDate: {
			full,
			year,
			month,
			date,
		},
		contact: {
			phone,
		},
		school,
	},
	enrollment: {
		dojo,
		type,
		monthlyRate,
	}
}

invoice: {
	parentID,
		studentID,
		type,
		cost,
		payStatus,
		payMethod,
		payDate
}