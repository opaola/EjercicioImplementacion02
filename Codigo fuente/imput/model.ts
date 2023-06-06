import { Canal } from "./canal"

let plataformaTwitcH
let plataformaNetflix
let plataformaSpotify

function seleccionarPlataforma() {
/*let sectionSeleccionarCanal = document.getElementById('Canales')
  sectionSeleccionarCanal.style.display = 'none' 
  
  let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'  */

  let botonSeleccionarPlataforma = document.getElementById("boton-plataforma") 
  botonSeleccionarPlataforma.addEventListener('click', seleccionarlistaPlataforma)

  let botonTwitch = document.getElementById('boton-twitch')
  botonTwitch.addEventListener('click', seleccionarTwitch)
  let botonNetflix = document.getElementById('boton-netflix')
  botonNetflix.addEventListener('click', seleccionarNetflix)
  let botonSpotify =document.getElementById('boton-spotify')
  botonSpotify.addEventListener('click', seleccionarSpotify) 

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarPlataforma)

} 

function seleccionarlistaPlataforma() {
  let sectionSeleccionarStreaming = document.getElementById('seleccionar-streaming')
  sectionSeleccionarStreaming.style.display = 'none'

  let sectionSeleccionarCanal = document.getElementById('seleccionar-canal')
  sectionSeleccionarCanal.style.display = 'block'
}*/
  let imputTwitch = document.getElementById('twitch')
  let imputNetflix = document.getElementById('netflix')
  let imputSpotify = document.getElementById('spotify')
  let spanPlataforma = document.getElementById('spanPlataforma')

    if (imputTwitch.checked) {
        spanPlataforma.innerHTML = 'twitch'
    } else if (imputNetflix.checked) {
        spanPlataforma.innerHTML = 'netflix'
    } else if (imputSpotify.checked) {
        spanPlataforma.innerHTML = 'spotify'
    } else {
        alert ('Selecciona un Streaming')
    }

function plataformaTwitch1(){
  plataformaTwitch = "Ninja"
}

function plataformaNetflix1(){
  plataformaNetflix = "Ninja"  
}

function plataformaSpotify1(){
  plataformaSpotify = "Ninja"
}


/*let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra =document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra) */