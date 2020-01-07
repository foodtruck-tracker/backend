const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users-model.js');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.findBy({ username: user.username })
    .first()
    .then(user1 => {
      if (user1) {
        res
          .status(409)
          .json({ username: 'That user already exists' });
      } else {
        Users.add(user).then(saved => {
          Users.findBy({ username: user.username })
            .first()
            .then(user => {
              const token = generateToken(user);
              res.status(201).json({
                message: `Hello, ${user.username}!`,
                token
              });
            })
            .catch(error => {
              res.status(500).json(error);
            });
        });
      }
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        console.log(token);
        res.status(200).json({
          message: `Hello, ${user.username}!`,
          token
        });
      } else {
        if (!user) {
          errors.username = 'That username does not exist, would you like to register?';
        }
        if (user && !bcrypt.compareSync(password, user.password)) {
          errors.password = 'Login failed, invalid password';
        }
        return res.status(400).json(errors);
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    role: user.role
  };

  const jwtSecret = process.env.JWT_SECRET || 'secret';
  const jwtOptions = {
    expiresIn: '7d'
  };

  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
}

module.exports = router;