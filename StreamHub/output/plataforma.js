"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canal = [];
    }
}
exports.Plataforma = Plataforma;
