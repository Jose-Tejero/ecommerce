const { UsersServices } = require('../services');
const transporter = require('../utils/mailer');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json({message: `Hola ${result.username}, tu cuenta ha sido creada. Se te enviará un correo a ${result.email} para confirmar tu identidad.`});
    transporter.sendMail({
      from: '<gpdjjtz@gmail.com>',
      to: result.email,
      subject: 'Bienvenido al E-commerce de Pepe',
      text: `Hola ${result.username}, haz creado una cuenta en esta tienda virtual. Esperemos que encuentres todo lo que necesites`,
      html: `<h2>Hola ${result.username}, haz creado una cuenta en esta tienda virtual.</h2> <p>Esperemos que encuentres todo lo que necesites.</p>`,
    });
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