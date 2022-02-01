//Llamado de librerias externas.
import path from 'path';
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import indexRouter from "../routes/index";
import empleadosRouter from "../routes/empleado";

class Application {
	
	private app: express.Application;

	constructor(){

		//Especificación de la usabilidad de las librerias importadas.
		this.app = express();

		this.app.set('views', path.join(__dirname, '../views'));
		this.app.set('view engine', 'ejs');

		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
		this.app.use(cookieParser());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(bodyParser.json());
		this.app.use(express.static(path.join(__dirname, '../public')));

		//Rutas de los módulos.
		this.app.use(indexRouter);
		this.app.use(empleadosRouter);
	}

	async start(port:number){
		//Especificación del puerto para correr el servidor.
		await this.app.listen(port);
		console.log("Servidor Corriendo en el puerto " + port);
	}
}

export default Application;