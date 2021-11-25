function contar() {
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var res = document.getElementById("res");

  var inicioV = Number(inicio.value);
  var fimV = Number(fim.value);
  var passoV = Number(passo.value);

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar!'
  } else {
    if (passoV <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      passoV = 1
    }
    if (inicioV < fimV) {
      res.innerHTML = 'Contando: <br>'
      for (inicioV; inicioV <= fimV; inicioV = inicioV + passoV) { //contagem crescente
        res.innerHTML += `${inicioV} \u{1f449}`;
      }
    } else {
      res.innerHTML = 'Contando: '
      for (inicioV; inicioV >= fimV; inicioV = inicioV - passoV) {//contagem regreciva
        res.innerHTML += `${inicioV} \u{1f449}`;
      }
    }
    res.innerHTML += `\u{1f3c1}`;
  }

  // for (inicioV; inicioV <= fimV; inicioV = inicioV + passoV) {
  //   res.innerHTML += `${inicioV} ->`;
  // }
  // res.innerHTML += "Fim";
}
