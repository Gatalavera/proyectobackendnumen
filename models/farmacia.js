const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pharmSchema = new Schema({
    nombre: {
        type: String,
    },
    droga: {
        type: String,
        required: true
    },
    laboratorio:{
        type: String,
    },
    miligramos: {
        type: Number,
    },
    presentacion: {
        type: String,
    },
    stock: {
        type: Number,
        required: true
    },
    aptoLactancia: {
        type: Boolean
    }

})

const Meds = mongoose.model('Meds', pharmSchema)
module.exports = {Meds}