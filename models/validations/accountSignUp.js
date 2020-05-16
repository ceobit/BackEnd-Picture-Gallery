const { Joi } = require('celebrate');

const accountSignUp = {
  body: Joi.object().keys({
    name: Joi.string()
      .required().min(2).max(30),
    about: Joi.string()
      .required().min(2).max(30),
    avatar: Joi.string()
      .required().uri(),
    email: Joi.string()
      .required().email(),
    password: Joi.string()
      .required().min(8),
  }),
};

module.exports.accountSignUp = accountSignUp;
