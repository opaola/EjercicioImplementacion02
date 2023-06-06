export class Plataforma {
	nombre: string;
	logo: string;
	descripcion: string;
	empresa: string;
	canal: string[];
	
	constructor(nombre: string, logo:  string, descripcion: string, empresa:string) {
	this.nombre= nombre;
	this.logo= logo;
	this.descripcion= descripcion;
	this.empresa= empresa;
	this.canal=[];
    }
	
	agregarCanal(canales: string) {
		this.canal.push(canales);
	}
}

function elegirPlataforma() {
let botonSeleccionarPlataforma = document.getElementById("boton-plataforma"); 
	if (botonSeleccionarPlataforma) {
    	botonSeleccionarPlataforma.addEventListener('click', seleccionarPlataforma);
  	} else {
    	console.error("Elige tu Plataforma favorita 👽.");
  	}
}
function seleccionarPlataforma() {
	let plataformaSeleccionada = new Plataforma("Netflix", "logo-netflix.jpg", "Descripción de Netflix", "Netflix Inc.");

	// Agregar un canal a la plataforma seleccionada
	plataformaSeleccionada.agregarCanal("Canal de películas y series");
  
	// Acceder al array de canales de la plataforma seleccionada
	console.log("Canales de la plataforma seleccionada:", plataformaSeleccionada.canal);
} 
  // Llamada a la función elegirPlataforma para configurar el evento click en el botón
  elegirPlataforma();
