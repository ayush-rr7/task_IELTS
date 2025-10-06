const express = require('express');
const userRouter =express.Router();

const userController=require('../controller/userController')

userRouter.post('/user',userController.createUser);

module.exports = userRouter;