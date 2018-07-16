module.exports = () => {
	const countersSeed = require('./countersSeed.js');
	const parentsSeed = require('./parentsSeed.js');
	const studentsSeed = require('./studentsSeed.js');
	const enrollmentsSeed = require('./enrollmentsSeed.js');
	const invoicesSeed = require('./invoicesSeed.js');
	Promise.all([
		countersSeed,
		parentsSeed,
		studentsSeed,
		enrollmentsSeed,
		invoicesSeed,
	])
		.then((dataArr) => { console.log('...All seeds inserted into collections succesfully!') });
}

/*
<0>par
	stu act
	invoice paid
par
	stu act
	invoice paid un
par
	stu act
	invoice un
---
par
	stu in
	invoice paid
par
	stu in
	invoice paid un
par
	stu in
	invoice un
---
par
	stu act in
	invoice paid
<1>par
	stu act in
	invoice paid un
par
	stu act in
	invoice un
*/