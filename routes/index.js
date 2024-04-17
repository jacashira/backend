const express = require('express');

const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const proveedoresRouter= require('./proveedor.router');
const segRouter= require('./seg.router');
const textRouter= require('./texts.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/apirest/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/proveedores', proveedoresRouter);
  router.use('/seg', segRouter);
  router.use('/info', textRouter);
}

module.exports = routerApi;
