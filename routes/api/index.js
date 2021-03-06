/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/**********************************|
|*  SET UP INDIVIDUAL API ROUTES  *|
|**********************************/
// Import in individual routes
const collectionNameRoutes = require("./collectionName");
const parentsRoutes = require('./parentsAPI.js');
const studentsRoutes = require('./studentsAPI.js');
const enrollmentsRoutes = require('./enrollmentsAPI.js');
const invoicesRoutes = require('./invoicesAPI.js');

// Sets path to use individual routes
// EXAMPLE:
//   router.use("/collectionName", collectionNameRoutes);
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/collectionName", collectionNameRoutes);
router.use('/parents', parentsRoutes);
router.use('/students', studentsRoutes);
router.use('/enrollments', enrollmentsRoutes);
router.use('/invoices', invoicesRoutes);


/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;