/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/***************************************|
|*  SETS UP API ROUTES FOR ENROLLMENTS *|
|***************************************/
// Imports in controller for enrollments
const enrollmentsController = require('../../controllers/enrollmentsController.js');

// Matches with '/api/enrollments' this is defined in '../index.js'
router.route('/')
	// .get(enrollmentsController.findSomeRegex)
	.post(enrollmentsController.create);

// Matches with '/api/enrollments/:id' this is defined in '../index.js'
router.route('/:id')
	// .get(enrollmentsController.findById)
	.put(enrollmentsController.update);
// .delete(enrollmentsController.remove);

// router.route('/idtwo/:id')
// .put(enrollmentsController.updateByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;
