"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canal = void 0;
class Canal {
    constructor(nombre, banner, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = [];
        this.plataforma = [];
    }
}
exports.Canal = Canal;
