const ctrlDatos = require('../controlador');
const express = require('express');
const router = express.Router();

router.get('/state/:estado', ctrlDatos.findState);

module.exports = router;