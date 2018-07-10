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
const parentsRoutes = require('./parentAPI.js');

// Sets path to use individual routes
// EXAMPLE:
//   router.use("/collectionName", collectionNameRoutes);
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/collectionName", collectionNameRoutes);
router.use('/parents', parentsRoutes);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;