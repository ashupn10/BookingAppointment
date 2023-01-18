const express=require('express');
const router=express.Router();
const allUsersController=require('../controllers/allUsers');
router.get(allUsersController.editUser);

module.exports=router;