import { Streamer } from "./streamer";

export class Categoria {
  nombre: string;
  descripcion: string;
  imagen: string;
  stream: Streamer[];
  
  constructor(nombre: string, descripcion: string, imagen: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.stream = [];
  }

  registrarStreamer(stream: Streamer) {
    this.stream.push(stream);
  }
}

function elegirCategoria() {
  let botonSeleccionarCategoria = document.getElementById('boton-categoria');
  if (botonSeleccionarCategoria) {
    botonSeleccionarCategoria.addEventListener('click', seleccionarCategoria);
  } else {
    console.error("Olvidaste elegir tu Canal favorito 👽.");
  }
}

function seleccionarCategoria() {
  let categoriaSeleccionada = new Categoria('juegos', 'Categoría que engloba transmisiones de videojuegos en vivo.', 'URL de la imagen representativa de la categoría de juegos.');

  let streamer1 = new Streamer('Streamer1', 'Descripción del streamer 1', 'Red Social 1');
  let streamer2 = new Streamer('Streamer2', 'Descripción del streamer 2', 'Red Social 3');

  categoriaSeleccionada.registrarStreamer(streamer1);
  categoriaSeleccionada.registrarStreamer(streamer2);

  // Acceder a los streamers asociados a la categoría seleccionada
  console.log("Streamers asociados a la categoría seleccionada:", categoriaSeleccionada.stream);
}

// Llamada a la función elegirCategoria para configurar el evento click en el botón
elegirCategoria();
