var contadorCaracteres = 0;
var contadorClicks = 0;

var textoComentario = document.getElementById('textoComentario');
var textoAutor = document.getElementById('textoAutor');
var botonEnviar = document.getElementById("botonEnviar");

function publicarTweet(){
  var tweet = textoComentario.value + "\n" + "Por: " + textoAutor.value;

  var publicarComentario = document.getElementById('publicarComentario');

  var parrafo = document.createElement("p");
  publicarComentario.appendChild(parrafo);

  parrafo.innerText += tweet;

  publicarComentario.insertBefore(parrafo, publicarComentario.firstChild);

  var nuevoValor= "";
  textoComentario = nuevoValor;
  texoAutor = nuevoValor;
}

function contar(){
  var letrasContar = document.getElementById("textoComentario");
  var publicarContador = document.getElementById('contadorLetras');
  //letrasContar.innerText=publicarContador.value.length+"/140";
  contadorCaracteres ++;
  if(contadorCaracteres >= 140){
    alert("El limite son 140 caracteres");
  }
  publicarContador.innerHTML = "Contar caracteres: " + contadorCaracteres + "/140";
}

function contadorDeClicks(){
  contadorClicks ++;
  var cantidadClicks = document.getElementById('cantidadClicks');
  cantidadClicks.innerText = "Contador de clicks: "+ contadorClicks;
}

function noContadorClicks(){
  event.stopPropagation();
}

document.addEventListener("click", contadorDeClicks);
textoComentario.addEventListener("click", noContadorClicks);
textoAutor.addEventListener("click", noContadorClicks);
