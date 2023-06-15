const {Schema, model} = require("mongoose");

const bcrypt = require("bcryptjs");

const encuestaSchema = new Schema({
    nombre: {type: String, required: true },
    identificacion: {type: Number, required: true},
    carrera_universitaria: {type: stringToLines, required: true},
    semestre:{type: Number, required: true},
    materia:{type: String, required: true},
    salon:{type: Number, required: true}
});

module.exports = model("encuesta",encuestaSchema);