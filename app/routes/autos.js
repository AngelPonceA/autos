const express = require("express")

const controller = require('../controllers/autos')

const router = express.Router();

const path = 'autos'

//CREACION DE RUTAS REFERENTES A  'AUTOS'
router.get(
    `/api/${path}`,
     controller.getAutos
)

router.get(
    `/api/${path}/modelo/:modelo`,
     controller.getAutosModelo
)

router.get(
    `/api/${path}/marca/:marca`,
     controller.getAutosMarca
)

module.exports = router