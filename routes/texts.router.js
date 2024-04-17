const express = require('express');

const router = express.Router();


router.get('/saludo', async (req, res, next) => {
  try {
    res.json({"msg":"Bienvenido Candidato Jorge Castorena"});
  } catch (error) {
    next(error);
  }
});


router.get('/version', async (req, res, next) => {
  try {
    res.json({"msg":"Version 1.0.3"})
  } catch (error) {
    next(error);
  }
});

module.exports = router;

