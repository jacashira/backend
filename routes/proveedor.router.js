const express = require('express');

const ProveedorService = require('./../services/proveedor.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateProveedorSchema, createProveedorSchema, getProveedorSchema } = require('./../schemas/proveedor.schema');

const router = express.Router();
const service = new ProveedorService();


//In case that you want create a new route in this project
//custom this file
router.get('/', async (req, res, next) => {
  try {
    const proveedores = await service.find();
    res.json(proveedores);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProveedorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getProveedorSchema, 'params'),
  validatorHandler(updateProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProveedorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

