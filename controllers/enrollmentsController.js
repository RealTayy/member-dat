/***************|
|* DEPENDECIES *|
|***************/
/* DATABASE TOOLS*/
// Loads ObjectId from mongoose
const ObjectId = require('mongoose').Types.ObjectId;

/**********************|
|*  Imports In model  *|
|**********************/
const Enrollments = require('../models').Enrollments;

/****************************|
|*  Imports In controllers  *|
|****************************/
const countersController = require('./countersController');
const parentsController = require('./parentsController')

/***************************|
|*  Methods for controller *|
|***************************/
const EnrollmentsController = {
	create: function (req, res) {
		Enrollments
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = EnrollmentsController;
