const express=require('express');
const router=express.Router();
const allUsersController=require('../controllers/allUsers');
router.get(allUsersController.deleteUser);

module.exports=router;