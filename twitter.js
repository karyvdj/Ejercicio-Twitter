var contadorCaracteres = 0;

function publicarTweet(){
  var textoComentario = document.getElementById('textoComentario').value;
  var textoAutor = document.getElementById('textoAutor').value;
  var tweet = textoComentario + "\n" + "Por: " + textoAutor;

  var publicarComentario = document.getElementById('publicarComentario');

  var parrafo = document.createElement("p");
  publicarComentario.appendChild(parrafo);

  parrafo.innerText += tweet;
}
