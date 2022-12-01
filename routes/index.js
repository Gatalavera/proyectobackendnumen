const express = require("express")
const router = express.Router()
const {crearMeds, verMed, verUnMed, editarMed, eliminarMed, consumirApi, consumirApi1} = require('../controllers/indexController')
const {validarId} = require('../middlewares/validarId')
const {check} = require('express-validator')

router.post('/crearMed',[
    check("nombre").not().isEmpty().withMessage('El campo nombre es requerido'),
    check("droga").not().isEmpty().withMessage('El campo droga es requerido'),
    check("laboratorio").not().isEmpty().withMessage('El campo laboratorio es requerido'),
    check("miligramos").not().isEmpty().withMessage('El campo miligramos es requerido'),
    check("presentacion").not().isEmpty().withMessage('El campo presentacion es requerido'),
    check("stock").not().isEmpty().withMessage('El campo stock es requerido'),
    check("aptoLactancia").not().isEmpty().withMessage('El campo Apto Lactancia es requerido'),
], crearMeds)

router.get('/verMed', verMed)

router.get('/ver/:id', validarId, verUnMed)

router.put('/editar/:id',[
    check("nombre").not().isEmpty().withMessage('El campo nombre es requerido'),
    check("droga").not().isEmpty().withMessage('El campo droga es requerido'),
    check("laboratorio").not().isEmpty().withMessage('El campo laboratorio es requerido'),
    check("miligramos").not().isEmpty().withMessage('El campo miligramos es requerido'),
    check("presentacion").not().isEmpty().withMessage('El campo presentacion es requerido'),
    check("stock").not().isEmpty().withMessage('El campo stock es requerido'),
    check("aptoLactancia").not().isEmpty().withMessage('El campo Apto Lactancia es requerido'),
] , validarId, editarMed)

router.delete('/eliminar/:id',validarId, eliminarMed)

router.get('/apiExterna', consumirApi)

router.get('/apiExterna1', consumirApi1)

module.exports = router