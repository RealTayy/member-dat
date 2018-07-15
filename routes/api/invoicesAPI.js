/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR INVOICES *|
|************************************/
// Imports in controller for invoices
const invoicesController = require('../../controllers/invoicesController.js');

// Matches with '/api/invoices' this is defined in '../index.js'
router.route('/')
	// .get(invoicesController.findSomeRegex)
	.post(invoicesController.create);

// Matches with '/api/invoices/:id' this is defined in '../index.js'
// router.route('/:id')
// .get(invoicesController.findById)
// .put(invoicesController.update)
// .delete(invoicesController.remove);

// router.route('/idtwo/:id')
// .get(invoicesController.findByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;
