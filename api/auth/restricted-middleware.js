const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || 'secret';

  if (token) {
    jwt.verify(token, secret, {}, (err, decoded) => {
      if (err) {
        res.status(401).json({ token: 'You shall not pass!' });
      } else {

        req.jwt = {
          username: decoded.username,
          user_id: decoded.subject,
          role: decoded.role
        };

        next();
      }
    });
  } else {
    res.status(401).json({ token: 'No token provided' });
  }
};