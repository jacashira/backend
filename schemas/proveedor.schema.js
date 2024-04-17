const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(8);
const razon_social = Joi.string().min(8);

const createProveedorSchema = Joi.object({
  name: name.required(),
  razon_social: razon_social.required()
});

const updateProveedorSchema = Joi.object({
  name: name,
  razon_social: razon_social,
});

const getProveedorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProveedorSchema, updateProveedorSchema, getProveedorSchema }
