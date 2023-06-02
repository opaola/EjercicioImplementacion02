export class Canal {
	nombre: string;
	banner: string;
	descripcion: string;
	streamer: string[];
	plataforma: string[];
	
	constructor (nombre: string, banner: string, descripcion: string) {
		this.nombre= nombre;
		this.banner = banner;
		this.descripcion = descripcion;
		this.streamer = [];
		this.plataforma =[];
	}

}
