const express = require('express');
const allUsersController=require('../controllers/allUsers');
const router= express.Router();


// Deleting the user data
router.get('/delete/:UserId',allUsersController.deleteUser);

// Editing the user data
router.get('/edit/:UserId',allUsersController.editUser);


// Getting Users data On the page
router.get('/',allUsersController.getUsers);

// posting user data into database and showing on the page
router.post('/',allUsersController.postUser);
module.exports=router;