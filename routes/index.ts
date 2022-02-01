//Llamado de librerias externas.
import { Router } from "express";
const router = Router();
import { index } from "../controllers/indexController";

//Ruta para renderizar la vista gráfica de Inicio.
router.route("/")
	.get(index)

export default router;