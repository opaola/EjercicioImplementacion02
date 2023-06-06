export class Stream {
	categoria: string[];
	streamer: string[];

	constructor(){
        this.categoria = [];
		this.streamer = [];
    }
}
function elegirStream() {
let botonSeleccionarStream = document.getElementById("boton-Stream"); 
	if (botonSeleccionarStream) {
		botonSeleccionarStream.addEventListener('click', seleccionarStream);
	} else {
		console.error("Elige tu Stream favorit@ 👽.");
    }
}
function seleccionarStream() {
	let streamSeleccionado = new Stream ();

	streamSeleccionado.categoria.push("Juegos");
	streamSeleccionado.categoria.push("Música");
  
	// Ejemplo de cómo agregar streamers al stream seleccionado
	streamSeleccionado.streamer.push("Streamer1");
	streamSeleccionado.streamer.push("Streamer2");
  
	// Acceder a las categorías y streamers asociados al stream seleccionado
	console.log("Categorías del stream seleccionado:", streamSeleccionado.categoria);
	console.log("Streamers del stream seleccionado:", streamSeleccionado.streamer);
}
  // Llamada a la función elegirStream para configurar el evento click en el botón
  elegirStream();

