const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
//module.exports = mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb')
//mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb

/*Cria retorno de erro do backend personalizado para as operações de POST, GET, PUT E DELETE*/
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."