/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/***********************************|
|*  SETS UP API ROUTES FOR PARENTS *|
|************************************/
// Imports in controller for parents
const parentsController = require('../../controllers/parentsController.js');

// Matches with '/api/parents' this is defined in '../index.js'
router.route('/')	
	.get(parentsController.findAll)
	.post(parentsController.create);

// Matches with '/api/parents/:id' this is defined in '../index.js'
router.route('/:id')
	.get(parentsController.findById)
	.put(parentsController.update)
	.delete(parentsController.remove);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;
