/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR STUDENTS *|
|************************************/
// Imports in controller for students
const studentsController = require('../../controllers/studentsController.js');

// Matches with '/api/students' this is defined in '../index.js'
router.route('/')
	// .get(studentsController.findSomeRegex)
	.post(studentsController.create);

// Matches with '/api/students/:id' this is defined in '../index.js'
// router.route('/:id')
// .get(studentsController.findById)
// .put(studentsController.update)
// .delete(studentsController.remove);

// router.route('/idtwo/:id')
// .get(studentsController.findByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;
