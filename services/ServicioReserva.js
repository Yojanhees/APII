import {modeloReserva} from'../models/modeloReserva.js' 
export class ServicioReserva{
    constructor(){}

    async registrar(datos){
        let reservaNueva=new modeloReserva(datos)
        return await reservaNueva.save()
    }
    async buscar(){
        let reservas=await modeloReserva.find()
        return reservas
    }
    async buscarID(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }reserva
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async eliminar(id){
        let reserva=await modeloReserva.findByIdAndDelete(id)
    }

}