
const Joi = require("joi");

module.exports = {
    SignUpValidation: Joi.object({
        name: Joi.string().min(4).max(20).required(),
        firstName: Joi.string().min(4).required(),
        username: Joi.string().min(8).required().alphanum(),
        email: Joi.string().email().required().lowercase().error(new Error("Bu email allaqachon mavjud")),
        password: Joi.string().min(4).required(),
    }),
    LoginValidation: Joi.object({
        email: Joi.string().email().required().lowercase().error(Error("Email xato, iltimos tekshirib boshqattan kiriting")),
        password: Joi.string().min(4).required(),
    })
}