"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Llamado de librerias externas.
const express_1 = require("express");
const router = (0, express_1.Router)();
const indexController_1 = require("../controllers/indexController");
//Ruta para renderizar la vista gráfica de Inicio.
router.route("/")
    .get(indexController_1.index);
exports.default = router;
