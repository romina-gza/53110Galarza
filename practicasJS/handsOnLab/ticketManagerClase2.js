class TicketManager {
    static #precioBaseGanancia = 0.10;
    constructor(eventos = []){
        this.eventos = eventos
    }
    get getEventos () {
        return this.eventos 
    }
    set getEventos (id) {
        let event = this.eventos.find(e => e.id === id)
        if (event === -1) {
            console.log('otro', '  ', event)
            console.log(`Pifeaste al escribir el id: ${id} o este no existe.`)
            return
        } else {
            let {id, nombre, lugar, fecha, precio} = event
            console.log(`Este es evento que buscaste:`)
            console.log(id,' ',nombre,' ',lugar,' ', fecha,' $', precio)
        }
    }
    // precio * 0.15 ; id incrementado segun la clase.
    agregaEvento = (nombre, lugar, precio,capacidad = 50, fecha= new Date().toLocaleString()) => {
        let id = 1
        if (this.eventos.length > 0){
            id= this.eventos[this.eventos.length -1 ].id + 1
        }

        let evento = {
            id,
            nombre : nombre,
            lugar: lugar,
            precio: precio + precio * TicketManager.#precioBaseGanancia ,
            capacidad: capacidad,
            fecha: fecha
        }

        // id incrementable
        this.eventos.push(evento)

    }

}

let crearEvento= new TicketManager()

crearEvento.agregaEvento('billie eilish', 'Mendoza', 200,99, new Date().toLocaleString())
crearEvento.agregaEvento('billie eilish', 'Mendoza', 200,99, new Date().toLocaleString())
crearEvento.agregaEvento('billie eilish', 'Mendoza', 200,99, new Date().toLocaleString())
crearEvento.getEventos
crearEvento.getEventos = 1