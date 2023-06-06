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
function elegirCanal() {
	let botonSeleccionarCanal = document.getElementById("boton-Canal"); 
		if (botonSeleccionarCanal) {
			botonSeleccionarCanal.addEventListener('click', seleccionarCanal);
		} else {
			console.error("Olvidaste elegir tu Canal favorito 👽.");
		}
}
function seleccionarCanal() {
	let canalSeleccionado = new Canal ('AzulStream', 'URL del banner del canal de juegos de AzulStream', 'Canal dedicado a transmitir juegos en vivo.')

	canalSeleccionado.streamer.push("Streamer1");
	canalSeleccionado.streamer.push("Streamer2");
  
	// Agregar plataformas al canal seleccionado
	canalSeleccionado.plataforma.push("Plataforma1");
	canalSeleccionado.plataforma.push("Plataforma2");
  
	// Acceder a los streamers y plataformas asociados al canal seleccionado
	console.log("Streamers del canal seleccionado:", canalSeleccionado.streamer);
	console.log("Plataformas del canal seleccionado:", canalSeleccionado.plataforma);
}
  // Llamada a la función elegirCanal para configurar el evento click en el botón
  elegirCanal();
