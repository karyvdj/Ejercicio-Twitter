var contadorCaracteres = 0;
var contarClicks = 0

function publicarTweet(){
  var textoComentario = document.getElementById('textoComentario').value;
  var textoAutor = document.getElementById('textoAutor').value;
  var tweet = textoComentario + "\n" + "Por: " + textoAutor;

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
  contadorCaracteres ++;
  if(contadorCaracteres >= 140){
    alert("El limite son 140 caracteres");
  }
  publicarContador.innerHTML = "Contar caracteres: " + contadorCaracteres + "/140";
}

function contadorClicks(){
  contarClicks += 1;
  var cantidadClicks = document.getElementById('cantidadClicks');
  cantidadClicks.innerText = contarClicks;
}

document.addEventListener("click", contardorClicks);
