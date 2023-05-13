function metodo() {
  const nome = document.getElementById("campo_name").value;
  document.getElementById("result").innerHTML = giveSpace("");
  document.getElementById("resulttwo").innerHTML = giveSpace(
    " ADS 2023.1 - IFPI CAMPUS PICOS "
  );
  document.getElementById("resulttree").innerHTML = giveSpace(
    ` ALUNO: ${nome} `
  );
  document.getElementById("resultfour").innerHTML =
    "*** Bem vindo ao Jogo de Adivinhação ***";
  document.getElementById("resultfive").innerHTML = giveSpace("");
}

function giveSpace(nome) {
  const maxSize = 36;
  const bord = (maxSize - nome.length) / 2;

  if (nome.length % 2 == 1) {
    nome = nome.padStart(bord + 1 + nome.length, "*");
  } else {
    nome = nome.padStart(bord + nome.length, "*");
  }

  nome = nome.padEnd(bord + nome.length, "*");
  return nome;
}
