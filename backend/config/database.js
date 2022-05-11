const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
//module.exports = mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb')
//mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."