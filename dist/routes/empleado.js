"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Llamado de librerias externas.
const express_1 = require("express");
const router = (0, express_1.Router)();
const EmpleadoController_1 = require("../controllers/EmpleadoController");
/* RUTAS PARA EL RENDERIZADO Y PRESENTACIÓN DE FRONTEND */
//Rutas para renderizar la vista gráfica principal del modelo Empleado.
router.route("/empleados")
    .get(EmpleadoController_1.indexEmpleado);
//Rutas para renderizar la vista gráfica para agregar al modelo Empleado.
router.route("/empleados/crear")
    .get(EmpleadoController_1.agregarEmpleado)
    .post(EmpleadoController_1.guardarEmpleado);
//Rutas para renderizar la vista gráfica para actualizar el modelo Empleado.
router.route("/empleados/actualizar/:id")
    .get(EmpleadoController_1.editarEmpleado)
    .post(EmpleadoController_1.actualizarEmpleado);
//Rutas para eliminar un registro del modelo Empleado.
router.route("/empleados/eliminar/:id")
    .get(EmpleadoController_1.eliminarEmpleado);
/* RUTAS PARA LA MANIPULACIÓN DE DATOS MEDIANTE UNA API */
//Rutas para consultar e insertar datos al modelo Empleado desde una API.
router.route("/empleados/api")
    .get(EmpleadoController_1.show)
    .post(EmpleadoController_1.create);
//Rutas para realizar una busqueda individual, eliminación y actualización mediante ID al modelo Empleado desde una API.
router.route("/empleados/api/:id")
    .get(EmpleadoController_1.find)
    .put(EmpleadoController_1.update)
    .delete(EmpleadoController_1.drop);
exports.default = router;
