const {Meds} = require('../models/farmacia')
const {validationResult} = require('express-validator')
const axios = require('axios');

const crearMeds = async (req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Meds(req.body)
        await item.save()
        res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }

}
const verMed = async (req, res) => {
    const items = await Meds.find()
    res.status(200).json({items})
}

const verUnMed = async (req, res) =>{
    const item = await Meds.findById(req.params.id)
    res.status(200).json({item})
}

const editarMed = async (req, res)=> {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Meds.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({msg: 'Actualizado con exito'})
        } else {
            res.status(501).json({err})
        }
        
    } catch (error) {
        res.status(501).json({error})
        
    }
}

const eliminarMed = async (req, res) =>{
    const item = await Meds.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: 'Se elimino con exito', item})
}

//Consume la api externa con un nro de registro fijo.

const consumirApi = async (req, res) => {
    try {
        const medicamento = await axios.get('https://cima.aemps.es/cima/rest/medicamento?nregistro=51347');
    res.status(200).json({med: medicamento.data})
    } catch (error) {
        res.status(501).json({error})
    }
    
}

//Consume api externa con Query, probar con los siguientes numeros de registro: 17558, 78862, 62054.

const consumirApi1 = async (req, res) => {
    try {
        const medicamento = await axios.get(`https://cima.aemps.es/cima/rest/medicamento?nregistro=${req.query.nregistro}`);
    res.status(200).json({med: medicamento.data})
    } catch (error) {
        res.status(501).json({error})
    }
    
}



module.exports = {crearMeds, verMed, verUnMed, editarMed, eliminarMed, consumirApi, consumirApi1}