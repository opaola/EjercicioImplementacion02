export class Plataforma {
	nombre: string;
	logo: string;
	descripcion: string;
	empresa: string;
	canal:[];
	
	constructor(nombre: string, logo: string, descripcion: string, empresa: string) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canal = [];
    }
}