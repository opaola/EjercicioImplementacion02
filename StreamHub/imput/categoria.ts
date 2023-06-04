import { Streamer } from "./streamer";

export class Categoria {
	nombre: string;
	descripcion: string;
	imagen: string;
	stream: Streamer[];
	
	constructor(nombre: string, descripcion: string, imagen: string) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen
		this.stream = [];
	}

	registrarStreamer (stream: Streamer) {
		this.stream.push(stream);
	}
}