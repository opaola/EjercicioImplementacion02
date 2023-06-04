"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.stream = [];
    }
    registrarStreamer(stream) {
        this.stream.push(stream);
    }
}
exports.Categoria = Categoria;
