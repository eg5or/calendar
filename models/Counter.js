const {Schema, model} = require('mongoose')

const counterSchema = new Schema({
    counterName: String,
    seq: Number

})

module.exports = model('Counter', counterSchema)