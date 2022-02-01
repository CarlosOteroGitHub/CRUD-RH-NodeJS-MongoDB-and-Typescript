//Llamado de librerias externas.
import { Router } from "express";
const router = Router();
import { indexEmpleado, agregarEmpleado, guardarEmpleado, editarEmpleado, actualizarEmpleado, eliminarEmpleado, show, create, find, update, drop } from "../controllers/EmpleadoController";

/* RUTAS PARA EL RENDERIZADO Y PRESENTACIÓN DE FRONTEND */

//Rutas para renderizar la vista gráfica principal del modelo Empleado.
router.route("/empleados")
    .get(indexEmpleado)

//Rutas para renderizar la vista gráfica para agregar al modelo Empleado.
router.route("/empleados/crear")
    .get(agregarEmpleado)
    .post(guardarEmpleado)

//Rutas para renderizar la vista gráfica para actualizar el modelo Empleado.
router.route("/empleados/actualizar/:id")
    .get(editarEmpleado)
    .post(actualizarEmpleado)

//Rutas para eliminar un registro del modelo Empleado.
router.route("/empleados/eliminar/:id")
    .get(eliminarEmpleado)

/* RUTAS PARA LA MANIPULACIÓN DE DATOS MEDIANTE UNA API */

//Rutas para consultar e insertar datos al modelo Empleado desde una API.
router.route("/empleados/api")
    .get(show)
    .post(create)

//Rutas para realizar una busqueda individual, eliminación y actualización mediante ID al modelo Empleado desde una API.
router.route("/empleados/api/:id")
    .get(find)
    .put(update)
    .delete(drop)
    
export default router;