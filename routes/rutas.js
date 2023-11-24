import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { ControladorReservas} from '../controllers/ControladorReserva.js';

//Para poder llamar al controlador
//debo crear un objeto de la clase controladorHabitacion
let controladorHabitacion=new ControladorHabitacion();
let controladorReservas=new ControladorReservas()

export let rutas=express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id',controladorHabitacion.borrarHabitacion)

rutas.post('/api/reservas',controladorReservas.registrar)
rutas.get('/api/reserva/:id', controladorReservas.buscarID)
rutas.get('/api/reservas',controladorReservas.buscar)
rutas.put('/api/reservas/:id',controladorReservas.modificar)
rutas.delete('/api/reservas/:id',controladorReservas.eliminar)