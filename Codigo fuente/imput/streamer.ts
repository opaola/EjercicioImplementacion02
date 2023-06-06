import { Canal } from "./canal";

export class Streamer {
	nickname: string;
	descripcion: string;
	redessociales: string[];
	stream: Canal[]; 

	constructor(nickname: string, descripcion: string, stream: string) {
		this.nickname = nickname;
		this.descripcion = descripcion;
		this.redessociales = [];
		this.stream = [];
	}

	registrarCanal(canal: Canal) {
		this.stream.push(canal)
	}
}
function elegirStreamer() {
	let botonSeleccionarStreamer = document.getElementById("boton-Streamer"); 
		if (botonSeleccionarStreamer) {
			botonSeleccionarStreamer.addEventListener('click', seleccionarStreamer);
		} else {
			console.error("Elige tu Streamer favorita 👽.");
		}
	}
	
function seleccionarStreamer() {
	let streamerSeleccionado = new Streamer ("Nombre del Streamer", "Descripción del Streamer", "Redes Sociales del Streamer");
  
	// Ejemplo de cómo registrar un canal al streamer seleccionado
	let canal1 = new Canal("Canal1", "Banner1.jpg", "Descripción del Canal 1");
	streamerSeleccionado.registrarCanal(canal1);
  
	// Ejemplo de cómo registrar otro canal al streamer seleccionado
	let canal2 = new Canal("Canal2", "Banner2.jpg", "Descripción del Canal 2");
	streamerSeleccionado.registrarCanal(canal2);
  
	// Acceder a los canales asociados al streamer seleccionado
	console.log("Canales del streamer seleccionado:", streamerSeleccionado.stream);
}
  // Llamada a la función elegirStreamer para configurar el evento click en el botón
  elegirStreamer();
