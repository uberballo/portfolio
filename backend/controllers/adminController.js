const jwt = require('jsonwebtoken');
require('dotenv').config();

const logInAdmin = (req, res) => {
  const body = req.body;

  if (
    body.username === process.env.ADMIN_USERNAME &&
    body.password === process.env.ADMIN_PASSWORD
  ) {
    const adminToken = {
      admin: true
    };

    const token = jwt.sign(adminToken, process.env.SECRET)

    return res.status(200).send({
      token,
      admin: true
    });
  } else {
    return res.status(401).json({
        error: 'invalid username or password'
    });
  }
};

module.exports = {
  logInAdmin
};
