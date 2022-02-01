//Llamado de librerias externas.
import mongoose from "mongoose";

//Conexión a MongoDB y creación de base de datos.
const dbName:string = 'api_rest_nodejs';

async function connectDB(){
	try {
		await mongoose.connect('mongodb://localhost/' + dbName), {
			useNewUrlParser: true
		};
		console.log("Conexión a la base de datos establecida!");
	} catch {
		console.log("Error");
	}
}

export default connectDB;