const { UsersServices } = require('../services');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json({message: `Hola ${result.username}, tu cuenta ha sido creada. Se te enviará un correo a ${result.email} para confirmar tu identidad.`});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Faltan datos',
    });
  }
};

module.exports = {
  userRegister,
};