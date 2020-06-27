const ctrlDatos = require('../controlador');
const express = require('express');
const router = express.Router();

router.get('/state/:estado', ctrlDatos.findState);
router.get('/cities/:cve', ctrlDatos.findCity);
module.exports = router;