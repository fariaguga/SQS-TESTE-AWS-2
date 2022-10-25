const express = require('express');
const {
  addUserController,
  getAllUsersController,
} = require('../controllers/userController');
//const middlewares = require('../middlewares/index');


const router = express.Router();

//const validateUser = [
//    middlewares.nameValidation, 
//    middlewares.emailValidation,
//    middlewares.passwordValidation,
//  ];

router.post('/', addUserController);
router.get('/', getAllUsersController);
module.exports = router;