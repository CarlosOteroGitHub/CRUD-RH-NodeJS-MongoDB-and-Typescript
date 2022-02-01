"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Llamado de librerias externas.
const mongoose_1 = __importDefault(require("mongoose"));
//Estructrua del modelo/colección Empleado.
let EmpleadoSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    nacimiento: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String
    }
});
let Empleado = mongoose_1.default.model('Empleado', EmpleadoSchema);
exports.default = Empleado;
