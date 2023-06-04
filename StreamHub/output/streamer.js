"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
class Streamer {
    constructor(nickname, descripcion, redessociales, stream) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redessociales = redessociales;
        this.stream = [];
    }
    registrarCanal(canal) {
        this.stream.push(canal);
    }
}
exports.Streamer = Streamer;
