//Llamado de librerias externas.
import mongoose from "mongoose";

//Estructrua del modelo/colección Empleado.
let EmpleadoSchema = new mongoose.Schema({
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

let Empleado = mongoose.model('Empleado', EmpleadoSchema);

export default Empleado;