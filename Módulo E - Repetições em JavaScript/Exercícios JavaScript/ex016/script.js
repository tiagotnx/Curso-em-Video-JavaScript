function contar() {
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var res = document.getElementById("res");

  var inicioV = Number(inicio.value);
  var fimV = Number(fim.value);
  var passoV = Number(passo.value);

  for (inicioV; inicioV <= fimV; inicioV = inicioV + passoV) {
    res.innerHTML += `${inicioV} ->`;
  }
  res.innerHTML += "Fim";
}
