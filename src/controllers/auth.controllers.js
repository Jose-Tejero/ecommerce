const { AuthServices } = require('../services');

const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    if (result) {
      const { username, email, id } = result.result;
      const user = { username, email, id };
      const token = AuthServices.getToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: 'Información inválida' });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'usario o email inválidos',
    })
  }
};

module.exports = { userLogin };