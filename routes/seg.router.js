const express = require('express');

const AuthService = require('./../services/auth.service');
const UserService = require('./../services/user.service');

const router = express.Router();
const userService = new UserService();
const service = new AuthService();

router.post('/login',
  async (req, res, next) => {
    try {
      const user = req.body;
      console.log('*****->>>>',user)
      const userDto = userService.findByEmail(user.email)
      if(!userDto)
        res.json(service.signToken(userDto));
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
