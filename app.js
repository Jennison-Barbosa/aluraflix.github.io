function adicionarFilme(){
  var filmeFavorito = document.getElementById("filme").value
  if (filmeFavorito.endsWith(".jpg")) {
     listarFilmeNaTela(filmeFavorito)
    } else {
  console.error("Endereço de filme inválido!")
}
  document.getElementById("filme").value = ""
}

function listarFilmeNaTela (filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">"
  var elementoListaFilmes = document.getElementById("listaFilmes")
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


var capaFilmes = [
  'https://ingresso-a.akamaihd.net/b2b/production/uploads/movie/poster/199/TGM_INTL_DGTL_KEY_ART_T_CRUISE_640_940.jpg',
  'https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg',
  'https://johto.legiaodosherois.com.br/wp-content/uploads/2022/08/legiao_CBMpY68dOx4D.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/e/ea/Godzilla_vs._Kong.jpg',
  'https://play-lh.googleusercontent.com/nz5s7-HJ3iijnvitzCwsa_oD5l7saKAnF_Hv3qGtsP6dtsXTqESZmfuQKqyZZD4UywyB'
]

for (var i = 0; i < capaFilmes.length; i++) {
  document.write('<img src=' + capaFilmes[i] + '>')
}
/*document.getElementById("imagens").innerHTML = "";
for (var i = 0; i < capaFilmes.length; i++) {
  document.getElementById("imagens").innerHTML +='<img src=' + capaFilmes[i] + ">";
}*/
