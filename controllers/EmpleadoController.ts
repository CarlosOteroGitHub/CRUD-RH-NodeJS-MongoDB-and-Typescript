//Llamado de librerias externas.
import { Request, Response } from "express";
import Empleado from "../models/Empleado";

/* FUNCIONES PARA EL RENDERIZADO Y PRESENTACIÓN DE FRONTEND */

//Función para renderizar la vista principal del modelo Empleado.
export async function indexEmpleado(req:Request, res:Response) {
	const lista_empleados = await Empleado.find();
	res.render('Empleado/index', { empleados: lista_empleados });
}

//Función para renderizar la vista principal del modelo Empleado.
export async function agregarEmpleado(req:Request, res:Response) {
	res.render('Empleado/agregar');
}

//Función para ingresar un registro al modelo Empleado y direccionar a la vista principal del modelo Empleado.
export async function guardarEmpleado(req:Request, res:Response) {
	const {nombre, correo, nacimiento, descripcion} = req.body;
	const nuevoEmpleado = new Empleado({nombre, correo, nacimiento, descripcion})
	await nuevoEmpleado.save();
	res.redirect('/empleados');
}

//Función para renderizar la vista de edición del modelo Empleado.
export async function editarEmpleado(req:Request, res:Response) {
	const lista_empleado = await Empleado.findOne({_id: req.params.id});
	res.render('Empleado/editar', { empleado: lista_empleado });
}

//Función para actualizar un registro al modelo Empleado y direccionar a la vista principal del modelo Empleado.
export async function actualizarEmpleado(req:Request, res:Response) {
	const { id } = req.params;
	const {nombre, correo, nacimiento, descripcion} = req.body;
	await Empleado.findByIdAndUpdate(id, {nombre, correo, nacimiento, descripcion});
	res.redirect('/empleados');
}

//Función para eliminar un registro al modelo Empleado mediante un ID y direccionar a la vista principal del modelo Empleado.
export async function eliminarEmpleado(req:Request, res:Response) {
	const { id } = req.params;
	await Empleado.findOneAndDelete({id});
	res.redirect('/empleados');
}

/* FUNCIONES PARA LA MANIPULACIÓN DE DATOS MEDIANTE UNA API */

//Función para mostrar una lista de todos los registros dentro del modelo Empleado.
export async function show(req:Request, res:Response): Promise <Response> {
	const empleados = await Empleado.find();
	return res.json(empleados);
}

//Función para ingresar un registro al modelo Empleado.
export async function create(req:Request, res:Response): Promise <void> {
	const {nombre, correo, nacimiento, descripcion} = req.body;
	const nuevoEmpleado = new Empleado({nombre, correo, nacimiento, descripcion})
	await nuevoEmpleado.save();
	res.json({data: nuevoEmpleado});
}

//Función para mostrar un registro dentro del modelo Empleado mediante un ID.
export async function find(req:Request, res:Response): Promise <void> {
	const empleado = await Empleado.findOne({_id: req.params.id});
	res.json(empleado);
}

//Función para actualizar un registro dentro del modelo Empleado mediante un ID.
export async function update(req:Request, res:Response): Promise <void> {
	const { empleado_update } = req.params;
	const empleado = await Empleado.findOneAndUpdate({empleado_update}, req.body, {new: true});
	res.json(empleado);
}

//Función para eliminar un registro dentro del modelo Empleado mediante un ID.
export async function drop(req:Request, res:Response): Promise <void> {
	const { id } = req.params;
	await Empleado.findOneAndDelete({id});
}