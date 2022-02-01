"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = exports.update = exports.find = exports.create = exports.show = exports.eliminarEmpleado = exports.actualizarEmpleado = exports.editarEmpleado = exports.guardarEmpleado = exports.agregarEmpleado = exports.indexEmpleado = void 0;
const Empleado_1 = __importDefault(require("../models/Empleado"));
/* FUNCIONES PARA EL RENDERIZADO Y PRESENTACIÓN DE FRONTEND */
//Función para renderizar la vista principal del modelo Empleado.
function indexEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const lista_empleados = yield Empleado_1.default.find();
        res.render('Empleado/index', { empleados: lista_empleados });
    });
}
exports.indexEmpleado = indexEmpleado;
//Función para renderizar la vista principal del modelo Empleado.
function agregarEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.render('Empleado/agregar');
    });
}
exports.agregarEmpleado = agregarEmpleado;
//Función para ingresar un registro al modelo Empleado y direccionar a la vista principal del modelo Empleado.
function guardarEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, correo, nacimiento, descripcion } = req.body;
        const nuevoEmpleado = new Empleado_1.default({ nombre, correo, nacimiento, descripcion });
        yield nuevoEmpleado.save();
        res.redirect('/empleados');
    });
}
exports.guardarEmpleado = guardarEmpleado;
//Función para renderizar la vista de edición del modelo Empleado.
function editarEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const lista_empleado = yield Empleado_1.default.findOne({ _id: req.params.id });
        res.render('Empleado/editar', { empleado: lista_empleado });
    });
}
exports.editarEmpleado = editarEmpleado;
//Función para actualizar un registro al modelo Empleado y direccionar a la vista principal del modelo Empleado.
function actualizarEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { nombre, correo, nacimiento, descripcion } = req.body;
        yield Empleado_1.default.findByIdAndUpdate(id, { nombre, correo, nacimiento, descripcion });
        res.redirect('/empleados');
    });
}
exports.actualizarEmpleado = actualizarEmpleado;
//Función para eliminar un registro al modelo Empleado mediante un ID y direccionar a la vista principal del modelo Empleado.
function eliminarEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield Empleado_1.default.findOneAndDelete({ id });
        res.redirect('/empleados');
    });
}
exports.eliminarEmpleado = eliminarEmpleado;
/* FUNCIONES PARA LA MANIPULACIÓN DE DATOS MEDIANTE UNA API */
//Función para mostrar una lista de todos los registros dentro del modelo Empleado.
function show(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const empleados = yield Empleado_1.default.find();
        return res.json(empleados);
    });
}
exports.show = show;
//Función para ingresar un registro al modelo Empleado.
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, correo, nacimiento, descripcion } = req.body;
        const nuevoEmpleado = new Empleado_1.default({ nombre, correo, nacimiento, descripcion });
        yield nuevoEmpleado.save();
        res.json({ data: nuevoEmpleado });
    });
}
exports.create = create;
//Función para mostrar un registro dentro del modelo Empleado mediante un ID.
function find(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const empleado = yield Empleado_1.default.findOne({ _id: req.params.id });
        res.json(empleado);
    });
}
exports.find = find;
//Función para actualizar un registro dentro del modelo Empleado mediante un ID.
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { empleado_update } = req.params;
        const empleado = yield Empleado_1.default.findOneAndUpdate({ empleado_update }, req.body, { new: true });
        res.json(empleado);
    });
}
exports.update = update;
//Función para eliminar un registro dentro del modelo Empleado mediante un ID.
function drop(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield Empleado_1.default.findOneAndDelete({ id });
    });
}
exports.drop = drop;
